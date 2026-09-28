const FOCUSABLE_SELECTORS = [
  'a[href]',
  'button:not([disabled])',
  'textarea:not([disabled])',
  'input:not([disabled]):not([type="hidden"])',
  'select:not([disabled])',
  '[tabindex]:not([tabindex="-1"])'
].join(',');

let lastFocused = null;
let activeModal = null;

const getFocusable = (modal) =>
  Array.from(modal.querySelectorAll(FOCUSABLE_SELECTORS)).filter(
    (el) => !el.hasAttribute('hidden') && el.offsetParent !== null
  );

const trapFocus = (event) => {
  if (!activeModal || event.key !== 'Tab') return;
  const focusable = getFocusable(activeModal);
  if (focusable.length === 0) {
    event.preventDefault();
    return;
  }
  const first = focusable[0];
  const last = focusable[focusable.length - 1];
  const current = document.activeElement;

  if (event.shiftKey && current === first) {
    event.preventDefault();
    last.focus();
  } else if (!event.shiftKey && current === last) {
    event.preventDefault();
    first.focus();
  }
};

const onKeydown = (event) => {
  if (event.key === 'Escape') {
    closeModal();
  } else if (event.key === 'Tab') {
    trapFocus(event);
  }
};

export function openModal(id) {
  const target = document.getElementById(id);
  if (!target) return;

  if (activeModal) {
    closeModal();
  }

  lastFocused = document.activeElement;
  target.hidden = false;
  activeModal = target;
  document.body.style.overflow = 'hidden';

  const focusable = getFocusable(target);
  const initial =
    target.querySelector('[data-autofocus]') ||
    focusable.find((el) => !el.hasAttribute('data-close-modal')) ||
    focusable[0] ||
    target;

  window.requestAnimationFrame(() => {
    if (initial && typeof initial.focus === 'function') {
      initial.focus();
    }
  });

  document.addEventListener('keydown', onKeydown);
}

export function closeModal() {
  if (!activeModal) return;
  activeModal.hidden = true;
  document.body.style.overflow = '';
  document.removeEventListener('keydown', onKeydown);
  const toFocus = lastFocused;
  activeModal = null;
  lastFocused = null;
  if (toFocus && typeof toFocus.focus === 'function') {
    window.requestAnimationFrame(() => toFocus.focus());
  }
}

export function initModal() {
  document.querySelectorAll('[data-open-modal]').forEach((trigger) => {
    trigger.addEventListener('click', (event) => {
      event.preventDefault();
      const id = trigger.getAttribute('data-open-modal');
      if (id) openModal(id);
    });
  });

  document.querySelectorAll('.modal').forEach((modal) => {
    modal.addEventListener('click', (event) => {
      const target = event.target;
      if (target instanceof HTMLElement && target.hasAttribute('data-close-modal')) {
        event.preventDefault();
        closeModal();
      }
    });
  });
}
