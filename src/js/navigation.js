export function initNavigation() {
  const toggle = document.getElementById('menu-toggle');
  const nav = document.getElementById('primary-nav');

  if (!toggle || !nav) return;

  const setOpen = (open) => {
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute(
      'aria-label',
      open ? 'Fechar menu de navegação' : 'Abrir menu de navegação'
    );
    nav.classList.toggle('is-open', open);
  };

  toggle.addEventListener('click', () => {
    const isOpen = toggle.getAttribute('aria-expanded') === 'true';
    setOpen(!isOpen);
  });

  nav.addEventListener('click', (event) => {
    const target = event.target;
    if (target instanceof HTMLElement && target.closest('a')) {
      setOpen(false);
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      const isOpen = toggle.getAttribute('aria-expanded') === 'true';
      if (isOpen) {
        setOpen(false);
        toggle.focus();
      }
    }
  });

  const mq = window.matchMedia('(min-width: 961px)');
  const handleChange = (event) => {
    if (event.matches) {
      setOpen(false);
    }
  };

  if (typeof mq.addEventListener === 'function') {
    mq.addEventListener('change', handleChange);
  } else if (typeof mq.addListener === 'function') {
    mq.addListener(handleChange);
  }
}
