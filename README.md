# Train Pinia

## Description

A learning project exploring Pinia for state management with Vue 3 and
TypeScript. This project demonstrates how to set up and use Pinia stores,
including examples of state management patterns and best practices.

## Prerequisites

- Node.js: `^20.19.0 || >=22.12.0`
- pnpm (recommended package manager)

## Used technologies

- Vue 3
- TypeScript
- Pinia
- Vue Router
- Vue I18n (Internationalization)
- Vite
- Vitest
- ESLint
- Prettier

## Project Setup

```sh
pnpm install
```

## Available Scripts

### Compile and Hot-Reload for Development

```sh
pnpm dev
```

### Type-Check, Compile and Minify for Production

The build process runs type checking and compilation in parallel:

```sh
pnpm build
```

### Preview Production Build

```sh
pnpm preview
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
pnpm test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
pnpm lint
```

### Format Code with [Prettier](https://prettier.io/)

```sh
pnpm format
```

## Recommended IDE Setup

[VS Code](https://code.visualstudio.com/) +
[Vue (Official)](https://marketplace.visualstudio.com/items?itemName=Vue.volar)
(and disable Vetur).

## Recommended Browser Setup

- Chromium-based browsers (Chrome, Edge, Brave, etc.):
  - [Vue.js devtools](https://chromewebstore.google.com/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd)
  - [Turn on Custom Object Formatter in Chrome DevTools](http://bit.ly/object-formatters)
- Firefox:
  - [Vue.js devtools](https://addons.mozilla.org/en-US/firefox/addon/vue-js-devtools/)
  - [Turn on Custom Object Formatter in Firefox DevTools](https://fxdx.dev/firefox-devtools-custom-object-formatters/)

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so
we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we
need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)
to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).
