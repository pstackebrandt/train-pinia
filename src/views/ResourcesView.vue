<!--
  ResourcesView Component

  A Vue view component that displays information about the technologies
  and tools used in this project. This view provides links to official
  documentation and resources for each technology.

  Features:
    - Technologies organized by category
    - Links to official documentation
    - Responsive layout consistent with other views

  Usage:
    This component is typically used as a route view in Vue Router.
-->
<script setup lang="ts"></script>

<template>
  <div class="resources">
    <div class="resources-content">
      <h1>Resources</h1>

      <div class="description">
        <p>
          Technologies and tools used in this project. Links to official documentation and
          resources.
        </p>
      </div>

      <div class="category">
        <h3>Core Framework</h3>
        <ul>
          <li>
            <a href="https://vuejs.org/" target="_blank" rel="noopener"> Vue 3 </a>
            - Progressive JavaScript framework
          </li>
          <li>
            <a href="https://www.typescriptlang.org/" target="_blank" rel="noopener">
              TypeScript
            </a>
            - Typed JavaScript at scale
          </li>
          <li>
            <a href="https://router.vuejs.org/" target="_blank" rel="noopener"> Vue Router </a>
            - Official router for Vue.js
          </li>
        </ul>
      </div>

      <div class="category">
        <h3>Build Tools</h3>
        <ul>
          <li>
            <a href="https://vite.dev/" target="_blank" rel="noopener"> Vite </a>
            - Next generation frontend tooling
          </li>
        </ul>
      </div>

      <div class="category">
        <h3>Development Tools</h3>
        <ul>
          <li>
            <a href="https://github.com/vuejs/devtools" target="_blank" rel="noopener">
              Vue DevTools
            </a>
            - Browser extension for debugging Vue applications
          </li>
          <li>
            <a href="https://eslint.org/" target="_blank" rel="noopener"> ESLint </a>
            - JavaScript linter
          </li>
          <li>
            <a href="https://prettier.io/" target="_blank" rel="noopener"> Prettier </a>
            - Code formatter
          </li>
        </ul>
      </div>

      <div class="category">
        <h3>Testing</h3>
        <ul>
          <li>
            <a href="https://vitest.dev/" target="_blank" rel="noopener"> Vitest </a>
            - Fast unit test framework
          </li>
          <li>
            <a href="https://www.cypress.io/" target="_blank" rel="noopener"> Cypress </a>
            - End-to-end testing framework
          </li>
          <li>
            <a href="https://playwright.dev/" target="_blank" rel="noopener"> Playwright </a>
            - End-to-end testing framework
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
.resources {
  max-width: 1024px;
  margin: 0 auto;
  padding: 2rem 1rem;
}

.resources-content h1 {
  font-weight: 500;
  font-size: 2.6rem;
  margin-bottom: 1.5rem;
  text-align: center;
}

h3 {
  font-size: 1.4rem;
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;
}

.description {
  margin-top: 1rem;
}

.description p {
  font-size: 1.1rem;
  line-height: 1.6;
}

.category ul {
  list-style-type: disc;
  padding-left: 1.5rem;
  line-height: 1.8;
}

.category li {
  margin-bottom: 0.3rem;
}

.category a {
  color: var(--color-text);
  text-decoration: none;
  border-bottom: 1px solid transparent;
  transition: border-color 0.3s;
}

.category a:hover {
  border-bottom-color: var(--color-text);
}

.resources-content h1,
.resources-content h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .resources {
    min-height: 100vh;
    display: flex;
    align-items: center;
    padding: 2rem;
  }

  .resources-content h1,
  .resources-content h3 {
    text-align: left;
  }

  .description p {
    font-size: 1.2rem;
  }
}
</style>
