<!--
  ProjectInfo Component

  Displays project information including title, description, and tech stack.
  This component provides an overview of the project and is used on the home
  page.

  Features:
    - Internationalized content (title, description, technologies title)
      using vue-i18n
    - Responsive layout (centered on mobile, left-aligned on desktop at
      1024px breakpoint)
    - Uses Naive UI typography components (NH1, NH3, NP) with custom styling
    - Displays tech stack list (hardcoded, not internationalized)
    - Title uses global "green" CSS class for accent color

  Usage:
    Used in HomeView.vue as the main content component for the home route.
-->
<script setup lang="ts">
import { NH1, NH3, NP } from 'naive-ui'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <div class="project-info">
    <NH1 class="green">{{ t('home.title') }}</NH1>
    <div class="description">
      <NP>
        {{ t('home.description') }}
      </NP>
    </div>

    <div class="tech-stack">
      <NH3>{{ t('home.technologiesTitle') }}</NH3>
      <ul>
        <li>Vue 3</li>
        <li>TypeScript</li>
        <li>Pinia</li>
        <li>Vue Router</li>
        <li>Vite</li>
        <li>Vitest</li>
        <li>ESLint</li>
        <li>Prettier</li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.project-info {
  max-width: 1024px;
  margin: 0 auto;
  box-sizing: border-box;
  width: 100%;
}

.project-info :deep(.n-h1) {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

.project-info :deep(.n-h3) {
  font-size: 1.4rem;
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;
}

.description {
  margin-top: 1rem;
}

.tech-stack ul {
  list-style-type: disc;
  padding-left: 1.5rem;
  line-height: 1.8;
}

.tech-stack li {
  margin-bottom: 0.3rem;
}

.project-info :deep(.n-h1),
.project-info :deep(.n-h3) {
  text-align: center;
}

@media (min-width: 1024px) {
  .project-info :deep(.n-h1),
  .project-info :deep(.n-h3) {
    text-align: left;
  }
}
</style>
