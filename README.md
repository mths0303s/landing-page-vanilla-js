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

Clone o repositório e instale as dependências:

```bash
git clone https://github.com/mths0303s/landing-page-vanilla-js.git
cd landing-page-vanilla-js
npm install
```

## Execução (ambiente de desenvolvimento)

```bash
npm run dev
```

Servidor local disponível em `http://localhost:5173`.

## Build de produção

```bash
npm run build
```

Os arquivos otimizados são gerados na pasta `dist/` com JavaScript e CSS minificados.

## Preview do build

```bash
npm run preview
```

Servidor de preview disponível em `http://localhost:4173`.

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
- Hero comercial com título, descrição e chamadas para ação.
- Secção **Sobre** com estatísticas do projeto.
- Secção de **Serviços/Recursos** com seis cards.
- Secção de **Processo** com três etapas e botão para abrir o modal de detalhes técnicos.
- **FAQ** acessível com controlo por teclado, `aria-expanded` e apenas uma resposta aberta por vez.
- **Formulário de contacto** com validação, mensagens específicas e estado de sucesso comunicado por `aria-live`.
- **Modal** com `role="dialog"`, `aria-modal`, focus trap, fecho por `Escape`, fecho por backdrop e retorno do foco ao elemento de origem.
- **Modo escuro**, **modo claro** e **alto contraste** com preferência persistida em `localStorage`.
- Footer com navegação secundária.

## Acessibilidade

- Estrutura semântica com landmarks (`header`, `nav`, `main`, `section`, `footer`).
- Skip link para saltar ao conteúdo principal.
- Foco visível com `:focus-visible` e contraste adequado.
- Uso criterioso de ARIA (`aria-expanded`, `aria-controls`, `aria-invalid`, `aria-live`, `aria-modal`, `aria-labelledby`, `aria-label`).
- Suporte a `prefers-reduced-motion` para reduzir animações.
- Suporte a `prefers-color-scheme` e `prefers-contrast` para respeitar preferências do sistema.
- Todos os componentes interativos são operáveis por teclado.

## Responsividade

Layout fluido e testado sem overflow horizontal em:

- 320px
- 375px
- 480px
- 768px
- 1024px
- 1280px
- 1440px

Utiliza CSS Grid, Flexbox, `clamp()` e unidades relativas.

## Testes

### Funcionais

- [ ] Menu abre e fecha ao clicar no botão hambúrguer.
- [ ] Menu fecha ao clicar em um link.
- [ ] Menu fecha ao pressionar `Escape`.
- [ ] FAQ expande e recolhe respostas.
- [ ] FAQ mantém apenas uma resposta aberta por vez.
- [ ] Modal abre ao clicar em "Ver detalhes técnicos".
- [ ] Modal fecha com `Escape`, backdrop e botão de fechar.
- [ ] Formulário valida campos obrigatórios e formato de e-mail.
- [ ] Formulário exibe modal de confirmação em caso de sucesso.
- [ ] Modo escuro alterna e persiste após recarregar.
- [ ] Alto contraste alterna e persiste após recarregar.

### Responsividade

- [ ] Layout íntegro em mobile (320px–480px).
- [ ] Layout íntegro em tablet (481px–1024px).
- [ ] Layout íntegro em desktop (1025px–1440px).

### Acessibilidade

- [ ] Navegação completa por teclado.
- [ ] Foco visível em todos os controles.
- [ ] Labels associadas a todos os campos.
- [ ] Landmarks presentes (`header`, `nav`, `main`, `footer`).
- [ ] ARIA aplicado corretamente e sem redundância.
- [ ] Contraste de cor adequado no modo padrão e reforçado no alto contraste.

### Build

```bash
npm run build
```

Deve concluir sem erros e gerar a pasta `dist/`.

## Versionamento (Git)

Sugestão de organização de branches:

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

O projeto foi preparado para hospedagem em plataformas conectadas ao GitHub (por exemplo, Netlify, Vercel, GitHub Pages ou Cloudflare Pages).

Fluxo esperado:

```text
Desenvolvimento
       ↓
Git commit
       ↓
Git push
       ↓
GitHub
       ↓
CI/CD
       ↓
npm install
       ↓
npm run build
       ↓
dist/
       ↓
Deploy
       ↓
Produção
```

Configurações típicas da plataforma:

- **Build command:** `npm run build`
- **Publish directory:** `dist`

## Licença

Uso acadêmico e comercial livre para os autores do projeto.
