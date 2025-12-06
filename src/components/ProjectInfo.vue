<!--
  ProjectInfo Component

  Displays project information including description and tech stack.
  This component provides an overview of the project.
-->
<script setup lang="ts">
import { NH1, NH3, NP } from 'naive-ui'
</script>

<template>
  <div class="project-info">
    <NH1 class="green">Train Pinia</NH1>
    <div class="description">
      <NP>
        A learning project exploring Pinia for state management with Vue 3 and TypeScript. This
        project demonstrates how to set up and use Pinia stores, including examples of state
        management patterns and best practices.
      </NP>
    </div>

    <div class="tech-stack">
      <NH3>Technologies Used</NH3>
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
