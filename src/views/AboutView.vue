<!--
  AboutView Component

  A Vue view component that serves as the about page/route in the
  application. This view displays information about the project itself,
  its purpose and goals.

  Features:
    - Displays project overview and purpose
    - Links to Pinia information page and Resources page
    - Responsive layout using Naive UI components

  Usage:
    This component is typically used as a route view in Vue Router.
-->
<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { NCard, NList, NListItem } from 'naive-ui'

const goals = [
  'Learn Pinia state management fundamentals',
  'Understand TypeScript integration with Pinia',
  'Explore store patterns and best practices',
  'Build practical examples and use cases',
]

const links = [
  {
    label: 'About Pinia',
    to: '/pinia',
    description: 'Information about Pinia state management',
  },
  {
    label: 'Resources',
    to: '/resources',
    description: 'Technologies and tools used in this project',
  },
]
</script>

<template>
  <div class="content-wrapper">
    <NCard>
      <h1>About This Project</h1>
      <p>
        Train Pinia is a learning project focused on exploring state management with Pinia in Vue 3
        applications using TypeScript.
      </p>
      <p>
        This project demonstrates practical examples of Pinia stores, state management patterns, and
        best practices for building scalable Vue applications.
      </p>

      <div class="section">
        <h3>Project Goals</h3>
        <NList>
          <NListItem v-for="goal in goals" :key="goal">
            {{ goal }}
          </NListItem>
        </NList>
      </div>

      <div class="section">
        <h3>Learn More</h3>
        <NList>
          <NListItem v-for="link in links" :key="link.to">
            <RouterLink :to="link.to">{{ link.label }}</RouterLink>
            - {{ link.description }}
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
