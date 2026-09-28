export function initFaq() {
  const container = document.querySelector('[data-faq]');
  if (!container) return;

  const questions = Array.from(container.querySelectorAll('.faq-question'));

  const closeAll = (except) => {
    questions.forEach((btn) => {
      if (btn === except) return;
      btn.setAttribute('aria-expanded', 'false');
      const answerId = btn.getAttribute('aria-controls');
      if (answerId) {
        const answer = document.getElementById(answerId);
        if (answer) answer.hidden = true;
      }
    });
  };

  questions.forEach((btn) => {
    btn.addEventListener('click', () => {
      const answerId = btn.getAttribute('aria-controls');
      const answer = answerId ? document.getElementById(answerId) : null;
      const isOpen = btn.getAttribute('aria-expanded') === 'true';

      if (isOpen) {
        btn.setAttribute('aria-expanded', 'false');
        if (answer) answer.hidden = true;
      } else {
        closeAll(btn);
        btn.setAttribute('aria-expanded', 'true');
        if (answer) answer.hidden = false;
      }
    });
  });
}
