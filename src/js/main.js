import { initNavigation } from './navigation.js';
import { initTheme } from './theme.js';
import { initFaq } from './faq.js';
import { initModal } from './modal.js';
import { initValidation } from './validation.js';

const setFooterYear = () => {
  const el = document.getElementById('footer-year');
  if (el) el.textContent = String(new Date().getFullYear());
};

const boot = () => {
  initTheme();
  initNavigation();
  initFaq();
  initModal();
  initValidation();
  setFooterYear();
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', boot, { once: true });
} else {
  boot();
}
