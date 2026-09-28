# Projeto Web Comercial — Código Completo

Este documento reúne todos os arquivos-fonte do projeto. Cada bloco começa com o título do arquivo (caminho relativo) e é separado por `---`.

---

## package.json

```json
{
  "name": "projeto-web-comercial",
  "version": "1.0.0",
  "private": true,
  "type": "module",
  "description": "Landing page comercial desenvolvida com HTML5, CSS3, JavaScript vanilla e Vite.",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "devDependencies": {
    "vite": "^7.1.7"
  }
}
```

---

## vite.config.js

```javascript
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    minify: 'esbuild',
    sourcemap: false,
    cssMinify: true,
    reportCompressedSize: true
  },
  server: {
    port: 5173,
    open: true
  },
  preview: {
    port: 4173
  }
});
```

---

## .gitignore

```gitignore
node_modules
dist
.vite
.DS_Store
Thumbs.db
*.log
.env
.env.*
!.env.example
.idea
.vscode
```

---

## public/favicon.svg

```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" role="img" aria-label="Logo">
  <rect width="64" height="64" rx="14" fill="#0d6efd"/>
  <path d="M20 42 L20 22 L28 22 L34 34 L40 22 L48 22 L48 42 L42 42 L42 30 L36 42 L32 42 L26 30 L26 42 Z" fill="#ffffff"/>
</svg>
```

---

## index.html

```html
<!DOCTYPE html>
<html lang="pt-BR" data-theme="light" data-contrast="normal">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Projeto web comercial desenvolvido com HTML5, CSS3 e JavaScript vanilla, com foco em acessibilidade, responsividade e desempenho." />
    <meta name="theme-color" content="#0d6efd" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <title>MB Web · Projeto Web Comercial</title>
    <link rel="stylesheet" href="/src/css/variables.css" />
    <link rel="stylesheet" href="/src/css/base.css" />
    <link rel="stylesheet" href="/src/css/layout.css" />
    <link rel="stylesheet" href="/src/css/components.css" />
    <link rel="stylesheet" href="/src/css/accessibility.css" />
    <link rel="stylesheet" href="/src/css/responsive.css" />
  </head>
  <body>
    <a class="skip-link" href="#main-content">Saltar para o conteúdo principal</a>

    <header class="site-header" role="banner">
      <div class="container header-inner">
        <a class="logo" href="#inicio" aria-label="MB Web, página inicial">
          <span class="logo-mark" aria-hidden="true">MB</span>
          <span class="logo-text">MB Web</span>
        </a>

        <nav id="primary-nav" class="primary-nav" aria-label="Navegação principal">
          <ul class="nav-list" role="list">
            <li><a href="#inicio">Início</a></li>
            <li><a href="#sobre">Sobre</a></li>
            <li><a href="#servicos">Serviços</a></li>
            <li><a href="#processo">Processo</a></li>
            <li><a href="#faq">FAQ</a></li>
            <li><a href="#contacto">Contacto</a></li>
          </ul>
        </nav>

        <div class="header-actions">
          <button
            type="button"
            id="theme-toggle"
            class="icon-button"
            aria-label="Alternar modo escuro"
            aria-pressed="false"
          >
            <span class="icon" aria-hidden="true" data-icon="theme">🌙</span>
            <span class="visually-hidden">Alternar modo escuro</span>
          </button>

          <button
            type="button"
            id="contrast-toggle"
            class="icon-button"
            aria-label="Alternar alto contraste"
            aria-pressed="false"
          >
            <span class="icon" aria-hidden="true" data-icon="contrast">◐</span>
            <span class="visually-hidden">Alternar alto contraste</span>
          </button>

          <button
            type="button"
            id="menu-toggle"
            class="menu-toggle"
            aria-label="Abrir menu de navegação"
            aria-expanded="false"
            aria-controls="primary-nav"
          >
            <span class="menu-bar" aria-hidden="true"></span>
            <span class="menu-bar" aria-hidden="true"></span>
            <span class="menu-bar" aria-hidden="true"></span>
          </button>
        </div>
      </div>
    </header>

    <main id="main-content" tabindex="-1">
      <section id="inicio" class="hero" aria-labelledby="hero-title">
        <div class="container hero-inner">
          <p class="eyebrow">Projeto Web Comercial</p>
          <h1 id="hero-title" class="hero-title">
            Uma aplicação web preparada para diferentes dispositivos.
          </h1>
          <p class="hero-description">
            Projeto desenvolvido com foco em estrutura semântica, experiência
            do utilizador, acessibilidade, responsividade e desempenho.
          </p>
          <div class="hero-actions">
            <a class="button button-primary" href="#contacto">Falar com a equipe</a>
            <a class="button button-secondary" href="#servicos">Ver recursos</a>
          </div>
        </div>
      </section>

      <section id="sobre" class="section" aria-labelledby="sobre-title">
        <div class="container">
          <header class="section-header">
            <p class="eyebrow">Sobre o projeto</p>
            <h2 id="sobre-title" class="section-title">Proposta técnica</h2>
            <p class="section-description">
              A aplicação foi organizada em módulos independentes para facilitar
              a manutenção, a evolução e o versionamento em Git. O foco está em
              qualidade de código, acessibilidade e desempenho.
            </p>
          </header>

          <div class="stats-grid">
            <article class="stat-card">
              <p class="stat-value">100%</p>
              <h3 class="stat-title">Responsividade</h3>
              <p class="stat-description">
                Layout fluido testado entre 320px e 1440px, sem overflow horizontal.
              </p>
            </article>

            <article class="stat-card">
              <p class="stat-value">A11y</p>
              <h3 class="stat-title">Acessibilidade</h3>
              <p class="stat-description">
                HTML semântico, landmarks, labels associadas e suporte completo a teclado.
              </p>
            </article>

            <article class="stat-card">
              <p class="stat-value">Vite</p>
              <h3 class="stat-title">Build otimizado</h3>
              <p class="stat-description">
                JavaScript e CSS minificados, assets organizados e build de produção pronto.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section id="servicos" class="section section-alt" aria-labelledby="servicos-title">
        <div class="container">
          <header class="section-header">
            <p class="eyebrow">Recursos</p>
            <h2 id="servicos-title" class="section-title">O que está incluído</h2>
            <p class="section-description">
              Conjunto de recursos essenciais para uma aplicação web comercial moderna.
            </p>
          </header>

          <div class="features-grid">
            <article class="feature-card">
              <div class="feature-icon" aria-hidden="true">📱</div>
              <h3 class="feature-title">Interfaces responsivas</h3>
              <p class="feature-description">
                Layouts fluidos com CSS Grid, Flexbox e unidades relativas
                para uma experiência consistente em qualquer ecrã.
              </p>
            </article>

            <article class="feature-card">
              <div class="feature-icon" aria-hidden="true">♿</div>
              <h3 class="feature-title">Acessibilidade</h3>
              <p class="feature-description">
                Estrutura semântica, ARIA aplicado com critério, skip link,
                foco visível e navegação por teclado.
              </p>
            </article>

            <article class="feature-card">
              <div class="feature-icon" aria-hidden="true">⚡</div>
              <h3 class="feature-title">Desempenho</h3>
              <p class="feature-description">
                Build com Vite, minificação de CSS e JavaScript e ausência
                de dependências desnecessárias.
              </p>
            </article>

            <article class="feature-card">
              <div class="feature-icon" aria-hidden="true">✅</div>
              <h3 class="feature-title">Validação</h3>
              <p class="feature-description">
                Formulários com validação em JavaScript, mensagens específicas
                e comunicação assistiva via <code>aria-live</code>.
              </p>
            </article>

            <article class="feature-card">
              <div class="feature-icon" aria-hidden="true">🎨</div>
              <h3 class="feature-title">Temas</h3>
              <p class="feature-description">
                Suporte a modo claro, modo escuro e alto contraste com preferências
                persistidas em <code>localStorage</code>.
              </p>
            </article>

            <article class="feature-card">
              <div class="feature-icon" aria-hidden="true">🧩</div>
              <h3 class="feature-title">Componentização</h3>
              <p class="feature-description">
                JavaScript modular em ES Modules e CSS organizado por responsabilidade,
                facilitando manutenção e evolução.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section id="processo" class="section" aria-labelledby="processo-title">
        <div class="container">
          <header class="section-header">
            <p class="eyebrow">Como trabalhamos</p>
            <h2 id="processo-title" class="section-title">Processo em três etapas</h2>
            <p class="section-description">
              Um fluxo simples, previsível e adequado a projetos comerciais.
            </p>
          </header>

          <ol class="process-grid" role="list">
            <li class="process-card">
              <span class="process-step" aria-hidden="true">01</span>
              <h3 class="process-title">Planeamento</h3>
              <p class="process-description">
                Definição da estrutura visual, componentes, requisitos de
                acessibilidade e comportamento responsivo.
              </p>
            </li>

            <li class="process-card">
              <span class="process-step" aria-hidden="true">02</span>
              <h3 class="process-title">Implementação</h3>
              <p class="process-description">
                Desenvolvimento das interfaces e funcionalidades em módulos
                e branches isoladas.
              </p>
            </li>

            <li class="process-card">
              <span class="process-step" aria-hidden="true">03</span>
              <h3 class="process-title">Validação</h3>
              <p class="process-description">
                Testes de responsividade, teclado, formulário, acessibilidade e build.
              </p>
            </li>
          </ol>

          <div class="process-actions">
            <button type="button" class="button button-primary" data-open-modal="details-modal">
              Ver detalhes técnicos
            </button>
          </div>
        </div>
      </section>

      <section id="faq" class="section section-alt" aria-labelledby="faq-title">
        <div class="container container-narrow">
          <header class="section-header">
            <p class="eyebrow">Perguntas frequentes</p>
            <h2 id="faq-title" class="section-title">FAQ</h2>
            <p class="section-description">
              Respostas rápidas às dúvidas mais comuns sobre o projeto.
            </p>
          </header>

          <div class="faq-list" data-faq>
            <div class="faq-item">
              <h3>
                <button
                  type="button"
                  class="faq-question"
                  id="faq-question-1"
                  aria-expanded="false"
                  aria-controls="faq-answer-1"
                >
                  <span>O projeto é responsivo?</span>
                  <span class="faq-icon" aria-hidden="true">+</span>
                </button>
              </h3>
              <div
                id="faq-answer-1"
                class="faq-answer"
                role="region"
                aria-labelledby="faq-question-1"
                hidden
              >
                <p>
                  Sim. O layout é fluido e foi testado entre 320px e 1440px,
                  utilizando CSS Grid, Flexbox, media queries e unidades relativas.
                </p>
              </div>
            </div>

            <div class="faq-item">
              <h3>
                <button
                  type="button"
                  class="faq-question"
                  id="faq-question-2"
                  aria-expanded="false"
                  aria-controls="faq-answer-2"
                >
                  <span>Existe suporte a teclado?</span>
                  <span class="faq-icon" aria-hidden="true">+</span>
                </button>
              </h3>
              <div
                id="faq-answer-2"
                class="faq-answer"
                role="region"
                aria-labelledby="faq-question-2"
                hidden
              >
                <p>
                  Sim. Todos os componentes interativos podem ser operados por
                  teclado, com foco visível, skip link e suporte à tecla Escape
                  no menu e no modal.
                </p>
              </div>
            </div>

            <div class="faq-item">
              <h3>
                <button
                  type="button"
                  class="faq-question"
                  id="faq-question-3"
                  aria-expanded="false"
                  aria-controls="faq-answer-3"
                >
                  <span>Como o projeto é preparado para produção?</span>
                  <span class="faq-icon" aria-hidden="true">+</span>
                </button>
              </h3>
              <div
                id="faq-answer-3"
                class="faq-answer"
                role="region"
                aria-labelledby="faq-question-3"
                hidden
              >
                <p>
                  O comando <code>npm run build</code> executa o Vite, que
                  minifica JavaScript e CSS, organiza os assets e gera a
                  pasta <code>dist/</code> pronta para publicação.
                </p>
              </div>
            </div>

            <div class="faq-item">
              <h3>
                <button
                  type="button"
                  class="faq-question"
                  id="faq-question-4"
                  aria-expanded="false"
                  aria-controls="faq-answer-4"
                >
                  <span>O formulário envia dados para uma API?</span>
                  <span class="faq-icon" aria-hidden="true">+</span>
                </button>
              </h3>
              <div
                id="faq-answer-4"
                class="faq-answer"
                role="region"
                aria-labelledby="faq-question-4"
                hidden
              >
                <p>
                  Não. Nesta versão o envio é simulado no lado do cliente para
                  demonstrar a validação e o estado de sucesso. A integração
                  com uma API real pode ser adicionada no módulo de validação.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contacto" class="section" aria-labelledby="contacto-title">
        <div class="container container-narrow">
          <header class="section-header">
            <p class="eyebrow">Fale connosco</p>
            <h2 id="contacto-title" class="section-title">Formulário de contacto</h2>
            <p class="section-description">
              Preencha os campos abaixo e a nossa equipa entrará em contacto.
            </p>
          </header>

          <form id="contact-form" class="contact-form" novalidate>
            <div class="form-field">
              <label for="field-name">
                Nome <span class="required" aria-hidden="true">*</span>
              </label>
              <input
                type="text"
                id="field-name"
                name="name"
                autocomplete="name"
                required
                minlength="2"
                aria-required="true"
                aria-describedby="error-name"
              />
              <p id="error-name" class="field-error" data-error-for="field-name"></p>
            </div>

            <div class="form-field">
              <label for="field-email">
                E-mail <span class="required" aria-hidden="true">*</span>
              </label>
              <input
                type="email"
                id="field-email"
                name="email"
                autocomplete="email"
                required
                aria-required="true"
                aria-describedby="error-email"
              />
              <p id="error-email" class="field-error" data-error-for="field-email"></p>
            </div>

            <div class="form-field">
              <label for="field-phone">Telefone</label>
              <input
                type="tel"
                id="field-phone"
                name="phone"
                autocomplete="tel"
                inputmode="tel"
                aria-describedby="error-phone hint-phone"
              />
              <p id="hint-phone" class="field-hint">Opcional. Mínimo de 8 dígitos.</p>
              <p id="error-phone" class="field-error" data-error-for="field-phone"></p>
            </div>

            <div class="form-field">
              <label for="field-message">
                Mensagem <span class="required" aria-hidden="true">*</span>
              </label>
              <textarea
                id="field-message"
                name="message"
                rows="5"
                required
                minlength="10"
                aria-required="true"
                aria-describedby="error-message"
              ></textarea>
              <p id="error-message" class="field-error" data-error-for="field-message"></p>
            </div>

            <div class="form-actions">
              <button type="submit" class="button button-primary">Enviar mensagem</button>
              <button type="reset" class="button button-secondary">Limpar</button>
            </div>

            <p id="form-status" class="form-status" role="status" aria-live="polite"></p>
          </form>
        </div>
      </section>
    </main>

    <footer class="site-footer" role="contentinfo">
      <div class="container footer-inner">
        <div class="footer-brand">
          <span class="logo-mark" aria-hidden="true">MB</span>
          <div>
            <p class="footer-title">MB Web</p>
            <p class="footer-copy">© <span id="footer-year"></span> Projeto acadêmico e comercial.</p>
          </div>
        </div>

        <nav aria-label="Navegação do rodapé">
          <ul class="footer-nav" role="list">
            <li><a href="#inicio">Início</a></li>
            <li><a href="#sobre">Sobre</a></li>
            <li><a href="#servicos">Serviços</a></li>
            <li><a href="#faq">FAQ</a></li>
            <li><a href="#contacto">Contacto</a></li>
          </ul>
        </nav>
      </div>
    </footer>

    <div
      class="modal"
      id="details-modal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="details-modal-title"
      aria-describedby="details-modal-description"
      hidden
    >
      <div class="modal-backdrop" data-close-modal></div>
      <div class="modal-dialog" role="document">
        <header class="modal-header">
          <h2 id="details-modal-title" class="modal-title">Detalhes técnicos</h2>
          <button
            type="button"
            class="modal-close"
            aria-label="Fechar modal"
            data-close-modal
          >
            ×
          </button>
        </header>
        <div class="modal-body" id="details-modal-description">
          <p>
            Este projeto foi construído com HTML5 semântico, CSS3 modular e
            JavaScript vanilla organizado em ES Modules, empacotado com Vite.
          </p>
          <ul>
            <li>Estrutura de arquivos separada por responsabilidade.</li>
            <li>Modo claro, modo escuro e alto contraste.</li>
            <li>Suporte completo a teclado e leitores de ecrã.</li>
            <li>Build de produção minificado para publicação.</li>
          </ul>
        </div>
        <footer class="modal-footer">
          <button type="button" class="button button-primary" data-close-modal>
            Entendi
          </button>
        </footer>
      </div>
    </div>

    <div
      class="modal"
      id="confirm-modal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="confirm-modal-title"
      aria-describedby="confirm-modal-description"
      hidden
    >
      <div class="modal-backdrop" data-close-modal></div>
      <div class="modal-dialog" role="document">
        <header class="modal-header">
          <h2 id="confirm-modal-title" class="modal-title">Mensagem enviada</h2>
          <button
            type="button"
            class="modal-close"
            aria-label="Fechar modal"
            data-close-modal
          >
            ×
          </button>
        </header>
        <div class="modal-body" id="confirm-modal-description">
          <p>
            Obrigado pelo seu contacto! A sua mensagem foi processada com sucesso
            e a nossa equipa responderá em breve.
          </p>
        </div>
        <footer class="modal-footer">
          <button type="button" class="button button-primary" data-close-modal>
            Fechar
          </button>
        </footer>
      </div>
    </div>

    <script type="module" src="/src/js/main.js"></script>
  </body>
</html>
```

---

## src/css/variables.css

```css
:root {
  --color-primary: #0d6efd;
  --color-primary-dark: #084298;
  --color-primary-contrast: #ffffff;

  --color-text: #212529;
  --color-text-muted: #495057;
  --color-background: #ffffff;
  --color-surface: #f8f9fa;
  --color-surface-alt: #eef2f7;
  --color-border: #dee2e6;
  --color-border-strong: #adb5bd;

  --color-success: #198754;
  --color-error: #dc3545;
  --color-focus: #0a58ca;

  --font-sans: 'Segoe UI', system-ui, -apple-system, 'Helvetica Neue', Arial,
    'Noto Sans', sans-serif;
  --font-mono: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;

  --font-size-base: clamp(1rem, 0.95rem + 0.2vw, 1.0625rem);
  --font-size-sm: 0.875rem;
  --font-size-lg: 1.125rem;
  --font-size-xl: clamp(1.25rem, 1.1rem + 0.6vw, 1.5rem);
  --font-size-2xl: clamp(1.5rem, 1.2rem + 1vw, 2rem);
  --font-size-3xl: clamp(2rem, 1.6rem + 2vw, 3rem);

  --line-height-base: 1.6;
  --line-height-tight: 1.25;

  --space-1: 0.25rem;
  --space-2: 0.5rem;
  --space-3: 0.75rem;
  --space-4: 1rem;
  --space-5: 1.5rem;
  --space-6: 2rem;
  --space-7: 3rem;
  --space-8: 4rem;
  --space-9: 6rem;

  --radius-sm: 6px;
  --radius-md: 10px;
  --radius-lg: 16px;
  --radius-pill: 999px;

  --shadow-sm: 0 1px 2px rgba(15, 23, 42, 0.06);
  --shadow-md: 0 6px 16px rgba(15, 23, 42, 0.08);
  --shadow-lg: 0 12px 32px rgba(15, 23, 42, 0.12);

  --transition-fast: 150ms ease;
  --transition-base: 220ms ease;

  --header-height: 72px;
  --container-max: 1200px;
  --container-narrow: 780px;
}

html[data-theme='dark'] {
  --color-text: #e9ecef;
  --color-text-muted: #adb5bd;
  --color-background: #0b1220;
  --color-surface: #121a2b;
  --color-surface-alt: #1a2338;
  --color-border: #2a3350;
  --color-border-strong: #495072;

  --color-primary: #4d97ff;
  --color-primary-dark: #2a7bf0;
  --color-primary-contrast: #ffffff;

  --color-focus: #6ea8ff;

  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.4);
  --shadow-md: 0 6px 16px rgba(0, 0, 0, 0.5);
  --shadow-lg: 0 12px 32px rgba(0, 0, 0, 0.6);
}

html[data-contrast='high'] {
  --color-text: #000000;
  --color-text-muted: #000000;
  --color-background: #ffffff;
  --color-surface: #ffffff;
  --color-surface-alt: #ffffff;
  --color-border: #000000;
  --color-border-strong: #000000;

  --color-primary: #0000ee;
  --color-primary-dark: #0000aa;
  --color-primary-contrast: #ffffff;

  --color-error: #b30000;
  --color-success: #006400;
  --color-focus: #ff8000;
}

html[data-theme='dark'][data-contrast='high'] {
  --color-text: #ffffff;
  --color-text-muted: #ffffff;
  --color-background: #000000;
  --color-surface: #000000;
  --color-surface-alt: #000000;
  --color-border: #ffffff;
  --color-border-strong: #ffffff;

  --color-primary: #ffff00;
  --color-primary-dark: #ffd400;
  --color-primary-contrast: #000000;

  --color-error: #ff6b6b;
  --color-success: #7fff7f;
  --color-focus: #ffff00;
}
```

---

## src/css/base.css

```css
*,
*::before,
*::after {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
  scroll-padding-top: calc(var(--header-height) + 16px);
  -webkit-text-size-adjust: 100%;
}

body {
  margin: 0;
  min-height: 100vh;
  font-family: var(--font-sans);
  font-size: var(--font-size-base);
  line-height: var(--line-height-base);
  color: var(--color-text);
  background-color: var(--color-background);
  transition: background-color var(--transition-base), color var(--transition-base);
  overflow-x: hidden;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0 0 var(--space-3);
  line-height: var(--line-height-tight);
  color: var(--color-text);
}

p {
  margin: 0 0 var(--space-4);
}

p:last-child {
  margin-bottom: 0;
}

a {
  color: var(--color-primary);
  text-decoration: none;
  transition: color var(--transition-fast);
}

a:hover {
  color: var(--color-primary-dark);
  text-decoration: underline;
}

img,
svg,
video {
  max-width: 100%;
  height: auto;
  display: block;
}

ul,
ol {
  padding-left: var(--space-5);
  margin: 0 0 var(--space-4);
}

button {
  font: inherit;
  color: inherit;
  cursor: pointer;
  background: transparent;
  border: 0;
}

input,
textarea,
select,
button {
  font-family: inherit;
}

code {
  font-family: var(--font-mono);
  background-color: var(--color-surface-alt);
  padding: 0.1em 0.35em;
  border-radius: var(--radius-sm);
  font-size: 0.9em;
}

hr {
  border: 0;
  border-top: 1px solid var(--color-border);
  margin: var(--space-6) 0;
}

::selection {
  background-color: var(--color-primary);
  color: var(--color-primary-contrast);
}
```

---

## src/css/layout.css

```css
.container {
  width: 100%;
  max-width: var(--container-max);
  margin: 0 auto;
  padding: 0 var(--space-5);
}

.container-narrow {
  max-width: var(--container-narrow);
}

.site-header {
  position: sticky;
  top: 0;
  z-index: 20;
  background-color: var(--color-background);
  border-bottom: 1px solid var(--color-border);
  box-shadow: var(--shadow-sm);
}

.header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-4);
  min-height: var(--header-height);
}

.header-actions {
  display: flex;
  align-items: center;
  gap: var(--space-2);
}

.primary-nav .nav-list {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-5);
  list-style: none;
  padding: 0;
  margin: 0;
}

.primary-nav a {
  color: var(--color-text);
  font-weight: 500;
  padding: var(--space-2) var(--space-3);
  border-radius: var(--radius-sm);
  transition: background-color var(--transition-fast), color var(--transition-fast);
}

.primary-nav a:hover {
  background-color: var(--color-surface);
  color: var(--color-primary);
  text-decoration: none;
}

.hero {
  padding: var(--space-8) 0 var(--space-9);
  background: linear-gradient(
    180deg,
    var(--color-surface) 0%,
    var(--color-background) 100%
  );
}

.hero-inner {
  max-width: 780px;
  text-align: center;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: var(--space-3);
  margin-top: var(--space-5);
}

.section {
  padding: var(--space-8) 0;
}

.section-alt {
  background-color: var(--color-surface);
}

.section-header {
  max-width: 720px;
  margin: 0 auto var(--space-6);
  text-align: center;
}

.section-description {
  color: var(--color-text-muted);
}

.stats-grid {
  display: grid;
  gap: var(--space-5);
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
}

.features-grid {
  display: grid;
  gap: var(--space-5);
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
}

.process-grid {
  display: grid;
  gap: var(--space-5);
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  list-style: none;
  padding: 0;
  margin: 0 0 var(--space-6);
  counter-reset: process;
}

.process-actions {
  display: flex;
  justify-content: center;
}

.faq-list {
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: var(--space-5);
  background-color: var(--color-surface);
  padding: var(--space-6);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
}

.form-actions {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-3);
}

.site-footer {
  background-color: var(--color-surface);
  border-top: 1px solid var(--color-border);
  padding: var(--space-6) 0;
  margin-top: var(--space-8);
}

.footer-inner {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-5);
  justify-content: space-between;
  align-items: center;
}

.footer-brand {
  display: flex;
  align-items: center;
  gap: var(--space-3);
}

.footer-nav {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-4);
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-nav a {
  color: var(--color-text);
}

.footer-nav a:hover {
  color: var(--color-primary);
}
```

---

## src/css/components.css

```css
.logo {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  font-weight: 700;
  color: var(--color-text);
  font-size: var(--font-size-lg);
}

.logo:hover {
  color: var(--color-primary);
  text-decoration: none;
}

.logo-mark {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: var(--radius-md);
  background-color: var(--color-primary);
  color: var(--color-primary-contrast);
  font-weight: 700;
  font-size: 0.9rem;
  letter-spacing: 0.02em;
}

.eyebrow {
  display: inline-block;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-size: var(--font-size-sm);
  font-weight: 600;
  color: var(--color-primary);
  margin: 0 0 var(--space-2);
}

.hero-title {
  font-size: var(--font-size-3xl);
  margin-bottom: var(--space-4);
}

.hero-description {
  font-size: var(--font-size-lg);
  color: var(--color-text-muted);
  margin-bottom: 0;
}

.section-title {
  font-size: var(--font-size-2xl);
}

.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-2);
  padding: var(--space-3) var(--space-5);
  min-height: 44px;
  border-radius: var(--radius-pill);
  font-weight: 600;
  font-size: 1rem;
  border: 2px solid transparent;
  cursor: pointer;
  text-decoration: none;
  transition: background-color var(--transition-fast),
    color var(--transition-fast), border-color var(--transition-fast),
    transform var(--transition-fast);
  white-space: nowrap;
}

.button:hover {
  text-decoration: none;
  transform: translateY(-1px);
}

.button-primary {
  background-color: var(--color-primary);
  color: var(--color-primary-contrast);
  border-color: var(--color-primary);
}

.button-primary:hover {
  background-color: var(--color-primary-dark);
  border-color: var(--color-primary-dark);
  color: var(--color-primary-contrast);
}

.button-secondary {
  background-color: transparent;
  color: var(--color-primary);
  border-color: var(--color-primary);
}

.button-secondary:hover {
  background-color: var(--color-primary);
  color: var(--color-primary-contrast);
}

.icon-button {
  width: 44px;
  height: 44px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-pill);
  color: var(--color-text);
  transition: background-color var(--transition-fast),
    color var(--transition-fast), border-color var(--transition-fast);
  font-size: 1.1rem;
}

.icon-button:hover {
  background-color: var(--color-primary);
  color: var(--color-primary-contrast);
  border-color: var(--color-primary);
}

.icon-button[aria-pressed='true'] {
  background-color: var(--color-primary);
  color: var(--color-primary-contrast);
  border-color: var(--color-primary);
}

.menu-toggle {
  display: none;
  width: 44px;
  height: 44px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 5px;
  border-radius: var(--radius-pill);
  border: 1px solid var(--color-border);
  background-color: var(--color-surface);
  transition: background-color var(--transition-fast),
    border-color var(--transition-fast);
}

.menu-toggle:hover {
  background-color: var(--color-primary);
  border-color: var(--color-primary);
}

.menu-toggle:hover .menu-bar {
  background-color: var(--color-primary-contrast);
}

.menu-bar {
  display: block;
  width: 22px;
  height: 2px;
  background-color: var(--color-text);
  border-radius: 2px;
  transition: transform var(--transition-fast), opacity var(--transition-fast),
    background-color var(--transition-fast);
}

.menu-toggle[aria-expanded='true'] .menu-bar:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
}

.menu-toggle[aria-expanded='true'] .menu-bar:nth-child(2) {
  opacity: 0;
}

.menu-toggle[aria-expanded='true'] .menu-bar:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
}

.stat-card,
.feature-card,
.process-card {
  background-color: var(--color-background);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: var(--space-5);
  box-shadow: var(--shadow-sm);
  transition: transform var(--transition-fast), box-shadow var(--transition-fast),
    border-color var(--transition-fast);
}

.section-alt .stat-card,
.section-alt .feature-card,
.section-alt .process-card {
  background-color: var(--color-background);
}

.stat-card:hover,
.feature-card:hover,
.process-card:hover {
  transform: translateY(-3px);
  box-shadow: var(--shadow-md);
  border-color: var(--color-border-strong);
}

.stat-value {
  font-size: var(--font-size-3xl);
  font-weight: 700;
  color: var(--color-primary);
  margin: 0 0 var(--space-2);
  line-height: 1;
}

.stat-title,
.feature-title,
.process-title {
  font-size: var(--font-size-xl);
  margin-bottom: var(--space-2);
}

.stat-description,
.feature-description,
.process-description {
  color: var(--color-text-muted);
  margin: 0;
}

.feature-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: var(--radius-md);
  background-color: var(--color-surface);
  font-size: 1.5rem;
  margin-bottom: var(--space-3);
}

.process-card {
  position: relative;
  padding-top: var(--space-6);
}

.process-step {
  display: inline-block;
  font-size: var(--font-size-sm);
  font-weight: 700;
  letter-spacing: 0.1em;
  color: var(--color-primary);
  margin-bottom: var(--space-2);
}

.faq-item {
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  background-color: var(--color-background);
  overflow: hidden;
}

.faq-item h3 {
  margin: 0;
}

.faq-question {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-3);
  padding: var(--space-4) var(--space-5);
  text-align: left;
  font-weight: 600;
  font-size: 1rem;
  color: var(--color-text);
  background-color: transparent;
  transition: background-color var(--transition-fast);
}

.faq-question:hover {
  background-color: var(--color-surface);
}

.faq-icon {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--color-primary);
  transition: transform var(--transition-fast);
}

.faq-question[aria-expanded='true'] .faq-icon {
  transform: rotate(45deg);
}

.faq-answer {
  padding: 0 var(--space-5) var(--space-4);
  color: var(--color-text-muted);
}

.form-field {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}

.form-field label {
  font-weight: 600;
  color: var(--color-text);
}

.required {
  color: var(--color-error);
}

.form-field input,
.form-field textarea {
  width: 100%;
  padding: var(--space-3) var(--space-4);
  font-size: 1rem;
  color: var(--color-text);
  background-color: var(--color-background);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  transition: border-color var(--transition-fast),
    box-shadow var(--transition-fast);
}

.form-field textarea {
  resize: vertical;
  min-height: 120px;
}

.form-field input:hover,
.form-field textarea:hover {
  border-color: var(--color-border-strong);
}

.form-field input[aria-invalid='true'],
.form-field textarea[aria-invalid='true'] {
  border-color: var(--color-error);
  box-shadow: 0 0 0 3px rgba(220, 53, 69, 0.15);
}

.field-hint {
  margin: 0;
  color: var(--color-text-muted);
  font-size: var(--font-size-sm);
}

.field-error {
  margin: 0;
  min-height: 1.25em;
  color: var(--color-error);
  font-size: var(--font-size-sm);
  font-weight: 500;
}

.form-status {
  margin: 0;
  min-height: 1.5em;
  font-weight: 500;
}

.form-status[data-state='success'] {
  color: var(--color-success);
}

.form-status[data-state='error'] {
  color: var(--color-error);
}

.modal {
  position: fixed;
  inset: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--space-4);
}

.modal[hidden] {
  display: none;
}

.modal-backdrop {
  position: absolute;
  inset: 0;
  background-color: rgba(15, 23, 42, 0.55);
  backdrop-filter: blur(2px);
}

html[data-theme='dark'] .modal-backdrop {
  background-color: rgba(0, 0, 0, 0.7);
}

.modal-dialog {
  position: relative;
  background-color: var(--color-background);
  color: var(--color-text);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-lg);
  max-width: 560px;
  width: 100%;
  max-height: calc(100vh - 2rem);
  overflow-y: auto;
  display: flex;
  flex-direction: column;
}

.modal-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-3);
  padding: var(--space-5);
  border-bottom: 1px solid var(--color-border);
}

.modal-title {
  margin: 0;
  font-size: var(--font-size-xl);
}

.modal-close {
  width: 40px;
  height: 40px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  line-height: 1;
  color: var(--color-text);
  border-radius: var(--radius-pill);
  transition: background-color var(--transition-fast);
}

.modal-close:hover {
  background-color: var(--color-surface);
}

.modal-body {
  padding: var(--space-5);
}

.modal-body ul {
  margin-top: var(--space-3);
}

.modal-footer {
  display: flex;
  justify-content: flex-end;
  gap: var(--space-3);
  padding: var(--space-5);
  border-top: 1px solid var(--color-border);
}

.footer-title {
  font-weight: 700;
  margin: 0;
}

.footer-copy {
  margin: 0;
  color: var(--color-text-muted);
  font-size: var(--font-size-sm);
}
```

---

## src/css/accessibility.css

```css
.visually-hidden {
  position: absolute !important;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0 0 0 0);
  white-space: nowrap;
  border: 0;
}

.skip-link {
  position: absolute;
  top: -100px;
  left: var(--space-3);
  z-index: 200;
  padding: var(--space-3) var(--space-4);
  background-color: var(--color-primary);
  color: var(--color-primary-contrast);
  border-radius: var(--radius-md);
  font-weight: 600;
  text-decoration: none;
  transition: top var(--transition-fast);
}

.skip-link:focus,
.skip-link:focus-visible {
  top: var(--space-3);
  outline: 3px solid var(--color-focus);
  outline-offset: 2px;
}

:focus {
  outline: none;
}

:focus-visible {
  outline: 3px solid var(--color-focus);
  outline-offset: 2px;
  border-radius: var(--radius-sm);
}

.button:focus-visible,
.icon-button:focus-visible,
.menu-toggle:focus-visible,
.modal-close:focus-visible,
.faq-question:focus-visible {
  outline: 3px solid var(--color-focus);
  outline-offset: 3px;
}

.form-field input:focus-visible,
.form-field textarea:focus-visible {
  outline: none;
  border-color: var(--color-primary);
  box-shadow: 0 0 0 3px rgba(13, 110, 253, 0.25);
}

html[data-contrast='high'] .form-field input:focus-visible,
html[data-contrast='high'] .form-field textarea:focus-visible {
  outline: 3px solid var(--color-focus);
  outline-offset: 2px;
  box-shadow: none;
}

html[data-contrast='high'] a {
  text-decoration: underline;
}

html[data-contrast='high'] .button {
  border-width: 3px;
}

html[data-contrast='high'] .stat-card,
html[data-contrast='high'] .feature-card,
html[data-contrast='high'] .process-card,
html[data-contrast='high'] .faq-item,
html[data-contrast='high'] .contact-form,
html[data-contrast='high'] .modal-dialog,
html[data-contrast='high'] .form-field input,
html[data-contrast='high'] .form-field textarea {
  border-width: 2px;
}

html[data-contrast='high'] .icon-button,
html[data-contrast='high'] .menu-toggle {
  border-width: 2px;
}

@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.001ms !important;
    scroll-behavior: auto !important;
  }

  .button:hover {
    transform: none;
  }

  .stat-card:hover,
  .feature-card:hover,
  .process-card:hover {
    transform: none;
  }
}
```

---

## src/css/responsive.css

```css
@media (max-width: 960px) {
  .primary-nav {
    position: absolute;
    top: var(--header-height);
    left: 0;
    right: 0;
    background-color: var(--color-background);
    border-bottom: 1px solid var(--color-border);
    box-shadow: var(--shadow-md);
    max-height: 0;
    overflow: hidden;
    visibility: hidden;
    transition: max-height var(--transition-base), visibility 0s linear var(--transition-base);
  }

  .primary-nav.is-open {
    max-height: calc(100vh - var(--header-height));
    visibility: visible;
    transition: max-height var(--transition-base), visibility 0s linear 0s;
  }

  .primary-nav .nav-list {
    flex-direction: column;
    gap: 0;
    padding: var(--space-3) var(--space-5);
  }

  .primary-nav .nav-list li {
    border-bottom: 1px solid var(--color-border);
  }

  .primary-nav .nav-list li:last-child {
    border-bottom: 0;
  }

  .primary-nav a {
    display: block;
    padding: var(--space-4) var(--space-2);
    border-radius: 0;
  }

  .menu-toggle {
    display: inline-flex;
  }
}

@media (max-width: 640px) {
  .hero {
    padding: var(--space-7) 0 var(--space-8);
  }

  .section {
    padding: var(--space-7) 0;
  }

  .contact-form {
    padding: var(--space-5);
  }

  .footer-inner {
    flex-direction: column;
    align-items: flex-start;
  }

  .modal-header,
  .modal-body,
  .modal-footer {
    padding: var(--space-4);
  }

  .form-actions {
    flex-direction: column;
    align-items: stretch;
  }

  .form-actions .button {
    width: 100%;
  }
}

@media (max-width: 380px) {
  .container {
    padding: 0 var(--space-4);
  }

  .logo-text {
    display: none;
  }

  .header-actions {
    gap: var(--space-1);
  }

  .icon-button,
  .menu-toggle {
    width: 40px;
    height: 40px;
  }
}

@media (min-width: 1440px) {
  .container {
    padding: 0 var(--space-6);
  }
}
```

---

## src/js/main.js

```javascript
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
```

---

## src/js/navigation.js

```javascript
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
```

---

## src/js/theme.js

```javascript
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
```

---

## src/js/faq.js

```javascript
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
```

---

## src/js/modal.js

```javascript
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
```

---

## src/js/validation.js

```javascript
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
```

---

## README.md

````markdown
# Projeto Web Comercial

Landing page comercial desenvolvida com **HTML5**, **CSS3**, **JavaScript vanilla (ES Modules)** e **Vite**, com foco em acessibilidade, responsividade e desempenho.

## Descrição

Este projeto demonstra a construção de uma aplicação web comercial moderna, sem frameworks JavaScript, aplicando boas práticas de estruturação semântica, organização modular do código, suporte a temas (claro, escuro e alto contraste), validação de formulários e navegação por teclado.

## Objetivo

- Aplicar HTML semântico, CSS modular e JavaScript modular em um projeto real.
- Garantir acessibilidade (WCAG) e responsividade em diferentes dispositivos.
- Preparar o projeto para versionamento em Git/GitHub e para publicação através de plataformas conectadas ao repositório.

## Tecnologias

- HTML5
- CSS3 (Custom Properties, Grid, Flexbox, media queries)
- JavaScript (ES Modules)
- [Vite](https://vitejs.dev/) `^7.1.7`
- Git e GitHub

## Requisitos

- [Node.js](https://nodejs.org/) `>= 18`
- npm (incluído com o Node.js)

## Instalação

```bash
git clone <url-do-repositorio>
cd projeto-web-comercial
npm install
```

## Execução

```bash
npm run dev       # servidor de desenvolvimento (http://localhost:5173)
npm run build     # build de produção em ./dist
npm run preview   # preview do build (http://localhost:4173)
```

## Estrutura de pastas

```text
projeto/
├── index.html
├── package.json
├── vite.config.js
├── README.md
├── .gitignore
├── public/
│   └── favicon.svg
└── src/
    ├── css/
    │   ├── variables.css
    │   ├── base.css
    │   ├── layout.css
    │   ├── components.css
    │   ├── accessibility.css
    │   └── responsive.css
    └── js/
        ├── main.js
        ├── navigation.js
        ├── theme.js
        ├── faq.js
        ├── modal.js
        └── validation.js
```

## Funcionalidades

- Header fixo com logo, navegação principal e ações de tema/contraste.
- Menu responsivo com botão hambúrguer, `aria-expanded`, fechamento com `Escape` e ao selecionar um link.
- Hero comercial, secção Sobre (3 stats), Serviços (6 cards), Processo (3 etapas), FAQ (4 perguntas), Formulário, Footer.
- FAQ acessível com controlo por teclado e apenas uma resposta aberta por vez.
- Formulário de contacto com validação, mensagens específicas e estado de sucesso comunicado por `aria-live`.
- Modal com `role="dialog"`, `aria-modal`, focus trap, fecho por Escape/backdrop/botão e retorno do foco.
- Modo escuro, modo claro e alto contraste com preferências persistidas em `localStorage`.

## Acessibilidade

- HTML semântico com landmarks (`header`, `nav`, `main`, `section`, `footer`).
- Skip link, `:focus-visible`, ARIA aplicado com critério.
- Suporte a `prefers-reduced-motion`, `prefers-color-scheme` e `prefers-contrast`.
- Todos os componentes interativos são operáveis por teclado.

## Responsividade

Layout fluido, testado sem overflow horizontal em 320px, 375px, 480px, 768px, 1024px, 1280px e 1440px. Utiliza CSS Grid, Flexbox, `clamp()` e unidades relativas.

## Versionamento (Git)

Sugestão de branches:

```text
main
develop
feature/menu-responsivo
feature/validacao-formulario
feature/modo-escuro
feature/faq
fix/responsividade
fix/validacao-formulario
docs/documentacao
```

Exemplos de commits:

```text
feat: implementar menu responsivo
feat: adicionar validação do formulário
feat: implementar modo escuro
feat: adicionar alto contraste
feat: implementar FAQ
feat: adicionar modal de confirmação
fix: corrigir validação do formulário
fix: ajustar responsividade
docs: atualizar documentação do projeto
```

## Deploy

O projeto foi preparado para hospedagem em plataformas conectadas ao GitHub (Netlify, Vercel, GitHub Pages, Cloudflare Pages, etc.).

Fluxo esperado:

```text
Desenvolvimento → Git commit → Git push → GitHub → CI/CD →
npm install → npm run build → dist/ → Deploy → Produção
```

Configuração típica:

- **Build command:** `npm run build`
- **Publish directory:** `dist`
````
