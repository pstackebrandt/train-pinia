<!--
  PiniaView Component

  A Vue view component that displays concise information about Pinia
  state management. This view provides an overview of Pinia concepts
  and links to official documentation.

  Features:
    - Overview of Pinia state management
    - Key concepts: stores, state, actions, getters
    - Links to official Pinia documentation and resources
    - Responsive layout using Naive UI components

  Usage:
    This component is typically used as a route view in Vue Router.
-->
<script setup lang="ts">
import { NCard, NList, NListItem } from 'naive-ui'

const concepts = [
  {
    term: 'Stores',
    description: 'Containers that hold state and business logic',
  },
  {
    term: 'State',
    description: 'The reactive data stored in a Pinia store',
  },
  {
    term: 'Actions',
    description: 'Methods that can mutate state and perform asynchronous operations',
  },
  {
    term: 'Getters',
    description: 'Computed properties that derive values from state',
  },
]

const resources = [
  {
    name: 'Pinia Documentation',
    url: 'https://pinia.vuejs.org/',
  },
  {
    name: 'Core Concepts',
    url: 'https://pinia.vuejs.org/core-concepts/',
  },
  {
    name: 'Cookbook',
    url: 'https://pinia.vuejs.org/cookbook/',
  },
  {
    name: 'API Reference',
    url: 'https://pinia.vuejs.org/api/',
  },
]
</script>

<template>
  <div class="content-wrapper">
    <NCard>
      <h1>About Pinia</h1>
      <p>
        Pinia is the official state management library for Vue.js. It provides a simple and
        intuitive API for managing application state with full TypeScript support.
      </p>

      <div class="section">
        <h3>Key Concepts</h3>
        <NList>
          <NListItem v-for="concept in concepts" :key="concept.term">
            <strong>{{ concept.term }}</strong> - {{ concept.description }}
          </NListItem>
        </NList>
      </div>

      <div class="section">
        <h3>Official Resources</h3>
        <NList>
          <NListItem v-for="resource in resources" :key="resource.url">
            <a :href="resource.url" target="_blank" rel="noopener">
              {{ resource.name }}
            </a>
          </NListItem>
        </NList>
      </div>
    </NCard>
  </div>
</template>

<style scoped>
.content-wrapper {
  max-width: 1024px;
  margin: 0 auto;
  padding: 1rem 0.5rem;
  box-sizing: border-box;
  width: 100%;
}

h1 {
  font-size: 2rem;
  font-weight: 500;
  margin-bottom: 1rem;
}

h3 {
  font-size: 1.25rem;
  font-weight: 500;
  margin-top: 0;
  margin-bottom: 0.75rem;
}

p {
  margin-bottom: 1rem;
  line-height: 1.6;
}

.section {
  margin-top: 2rem;
}

.section a {
  font-weight: 500;
  text-decoration: none;
}

@media (min-width: 1024px) {
  .content-wrapper {
    padding: 2rem;
  }
}
</style>
