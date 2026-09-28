import { openModal } from './modal.js';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const rules = {
  name: (value) => {
    const trimmed = value.trim();
    if (!trimmed) return 'Informe o seu nome.';
    if (trimmed.length < 2) return 'O nome deve ter pelo menos 2 caracteres.';
    return '';
  },
  email: (value) => {
    const trimmed = value.trim();
    if (!trimmed) return 'Informe um e-mail válido.';
    if (!EMAIL_REGEX.test(trimmed)) return 'Informe um e-mail válido.';
    return '';
  },
  phone: (value) => {
    const trimmed = value.trim();
    if (!trimmed) return '';
    const digits = trimmed.replace(/\D/g, '');
    if (digits.length < 8) {
      return 'Informe um telefone com pelo menos 8 dígitos.';
    }
    return '';
  },
  message: (value) => {
    const trimmed = value.trim();
    if (!trimmed) return 'Informe uma mensagem.';
    if (trimmed.length < 10) {
      return 'A mensagem deve ter pelo menos 10 caracteres.';
    }
    return '';
  }
};

const setFieldError = (input, message) => {
  const errorId = input.getAttribute('aria-describedby');
  const errorEl = errorId
    ? document.querySelector(`[data-error-for="${input.id}"]`)
    : null;

  if (message) {
    input.setAttribute('aria-invalid', 'true');
    if (errorEl) errorEl.textContent = message;
  } else {
    input.removeAttribute('aria-invalid');
    if (errorEl) errorEl.textContent = '';
  }
};

const validateField = (input) => {
  const name = input.name;
  const rule = rules[name];
  if (!rule) return '';
  const message = rule(input.value);
  setFieldError(input, message);
  return message;
};

const setStatus = (statusEl, state, message) => {
  if (!statusEl) return;
  statusEl.textContent = message;
  if (state) {
    statusEl.setAttribute('data-state', state);
  } else {
    statusEl.removeAttribute('data-state');
  }
};

export function initValidation() {
  const form = document.getElementById('contact-form');
  if (!(form instanceof HTMLFormElement)) return;

  const statusEl = document.getElementById('form-status');
  const fields = Array.from(
    form.querySelectorAll('input[name], textarea[name]')
  ).filter((el) => rules[el.name]);

  fields.forEach((input) => {
    input.addEventListener('blur', () => validateField(input));
    input.addEventListener('input', () => {
      if (input.getAttribute('aria-invalid') === 'true') {
        validateField(input);
      }
    });
  });

  form.addEventListener('reset', () => {
    fields.forEach((input) => setFieldError(input, ''));
    setStatus(statusEl, null, '');
  });

  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    let firstInvalid = null;
    fields.forEach((input) => {
      const message = validateField(input);
      if (message && !firstInvalid) firstInvalid = input;
    });

    if (firstInvalid) {
      setStatus(statusEl, 'error', 'Corrija os campos destacados e tente novamente.');
      firstInvalid.focus();
      return;
    }

    const submitBtn = form.querySelector('button[type="submit"]');
    if (submitBtn) submitBtn.disabled = true;
    setStatus(statusEl, null, 'A processar a sua mensagem...');

    await new Promise((resolve) => setTimeout(resolve, 900));

    setStatus(
      statusEl,
      'success',
      'Mensagem enviada com sucesso. A nossa equipa entrará em contacto.'
    );
    form.reset();
    if (submitBtn) submitBtn.disabled = false;

    openModal('confirm-modal');
  });
}
