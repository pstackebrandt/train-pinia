<!--
  ResourcesView Component

  A Vue view component that displays information about the technologies
  and tools used in this project. This view provides links to official
  documentation and resources for each technology.

  Features:
    - Technologies organized by category
    - Links to official documentation
    - Responsive layout using Naive UI components

  Usage:
    This component is typically used as a route view in Vue Router.
-->
<script setup lang="ts">
import { NCard, NList, NListItem, NH1, NH3, NP } from 'naive-ui'

const technologies = [
  {
    category: 'Core Framework',
    items: [
      {
        name: 'Vue 3',
        url: 'https://vuejs.org/',
        description: 'Progressive JavaScript framework',
      },
      {
        name: 'TypeScript',
        url: 'https://www.typescriptlang.org/',
        description: 'Typed JavaScript at scale',
      },
      {
        name: 'Vue Router',
        url: 'https://router.vuejs.org/',
        description: 'Official router for Vue.js',
      },
    ],
  },
  {
    category: 'Build Tools',
    items: [
      {
        name: 'Vite',
        url: 'https://vite.dev/',
        description: 'Next generation frontend tooling',
      },
    ],
  },
  {
    category: 'UI Components',
    items: [
      {
        name: 'Naive UI',
        url: 'https://www.naiveui.com/',
        description: 'Vue 3 component library',
      },
      {
        name: '@vicons/ionicons5',
        url: 'https://www.xicons.org/#/',
        description: 'Icon library for Vue 3 (Ionicons v5)',
      },
    ],
  },
  {
    category: 'Development Tools',
    items: [
      {
        name: 'Vue DevTools',
        url: 'https://github.com/vuejs/devtools',
        description: 'Browser extension for debugging Vue applications',
      },
      {
        name: 'ESLint',
        url: 'https://eslint.org/',
        description: 'JavaScript linter',
      },
      {
        name: 'Prettier',
        url: 'https://prettier.io/',
        description: 'Code formatter',
      },
    ],
  },
  {
    category: 'Testing',
    items: [
      {
        name: 'Vitest',
        url: 'https://vitest.dev/',
        description: 'Fast unit test framework',
      },
      {
        name: 'Cypress',
        url: 'https://www.cypress.io/',
        description: 'End-to-end testing framework',
      },
      {
        name: 'Playwright',
        url: 'https://playwright.dev/',
        description: 'End-to-end testing framework',
      },
    ],
  },
]
</script>

<template>
  <div class="resources">
    <NCard>
      <NH1>Resources</NH1>
      <NP>
        Technologies and tools used in this project. Links to official documentation and resources.
      </NP>

      <div v-for="tech in technologies" :key="tech.category" class="category">
        <NH3>{{ tech.category }}</NH3>
        <NList>
          <NListItem v-for="item in tech.items" :key="item.name">
            <a :href="item.url" target="_blank" rel="noopener">
              {{ item.name }}
            </a>
            - {{ item.description }}
          </NListItem>
        </NList>
      </div>
    </NCard>
  </div>
</template>

<style scoped>
.resources {
  max-width: 1024px;
  margin: 0 auto;
  padding: 1rem 0.5rem;
  box-sizing: border-box;
  width: 100%;
}

.category {
  margin-top: 2rem;
}

.category a {
  font-weight: 500;
  text-decoration: none;
}

@media (min-width: 1024px) {
  .resources {
    padding: 2rem;
  }
}
</style>
