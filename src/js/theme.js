const THEME_KEY = 'mbweb.theme';
const CONTRAST_KEY = 'mbweb.contrast';

const readStorage = (key) => {
  try {
    return window.localStorage.getItem(key);
  } catch (error) {
    return null;
  }
};

const writeStorage = (key, value) => {
  try {
    window.localStorage.setItem(key, value);
  } catch (error) {
    /* storage indisponível */
  }
};

const applyTheme = (theme) => {
  const root = document.documentElement;
  root.setAttribute('data-theme', theme);
  const toggle = document.getElementById('theme-toggle');
  if (toggle) {
    const isDark = theme === 'dark';
    toggle.setAttribute('aria-pressed', String(isDark));
    toggle.setAttribute(
      'aria-label',
      isDark ? 'Desativar modo escuro' : 'Ativar modo escuro'
    );
    const icon = toggle.querySelector('[data-icon="theme"]');
    if (icon) icon.textContent = isDark ? '☀️' : '🌙';
  }
};

const applyContrast = (contrast) => {
  const root = document.documentElement;
  root.setAttribute('data-contrast', contrast);
  const toggle = document.getElementById('contrast-toggle');
  if (toggle) {
    const isHigh = contrast === 'high';
    toggle.setAttribute('aria-pressed', String(isHigh));
    toggle.setAttribute(
      'aria-label',
      isHigh ? 'Desativar alto contraste' : 'Ativar alto contraste'
    );
  }
};

const resolveInitialTheme = () => {
  const stored = readStorage(THEME_KEY);
  if (stored === 'dark' || stored === 'light') return stored;
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  return prefersDark ? 'dark' : 'light';
};

const resolveInitialContrast = () => {
  const stored = readStorage(CONTRAST_KEY);
  if (stored === 'high' || stored === 'normal') return stored;
  const prefersMore = window.matchMedia && window.matchMedia('(prefers-contrast: more)').matches;
  return prefersMore ? 'high' : 'normal';
};

export function initTheme() {
  applyTheme(resolveInitialTheme());
  applyContrast(resolveInitialContrast());

  const themeToggle = document.getElementById('theme-toggle');
  const contrastToggle = document.getElementById('contrast-toggle');

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme');
      const next = current === 'dark' ? 'light' : 'dark';
      applyTheme(next);
      writeStorage(THEME_KEY, next);
    });
  }

  if (contrastToggle) {
    contrastToggle.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-contrast');
      const next = current === 'high' ? 'normal' : 'high';
      applyContrast(next);
      writeStorage(CONTRAST_KEY, next);
    });
  }
}
