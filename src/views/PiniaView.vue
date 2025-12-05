<!--
  PiniaView Component

  A Vue view component that displays concise information about Pinia
  state management. This view provides an overview of Pinia concepts
  and links to official documentation.

  Features:
    - Overview of Pinia state management
    - Key concepts: stores, state, actions, getters
    - Links to official Pinia documentation and resources
    - Responsive layout consistent with other views

  Usage:
    This component is typically used as a route view in Vue Router.
-->
<script setup lang="ts"></script>

<template>
  <div class="pinia">
    <div class="pinia-content">
      <h1>About Pinia</h1>

      <div class="description">
        <p>
          Pinia is the official state management library for Vue.js. It provides a simple and
          intuitive API for managing application state with full TypeScript support.
        </p>
      </div>

      <div class="concepts">
        <h3>Key Concepts</h3>
        <ul>
          <li><strong>Stores</strong> - Containers that hold state and business logic</li>
          <li><strong>State</strong> - The reactive data stored in a Pinia store</li>
          <li>
            <strong>Actions</strong> - Methods that can mutate state and perform asynchronous
            operations
          </li>
          <li><strong>Getters</strong> - Computed properties that derive values from state</li>
        </ul>
      </div>

      <div class="resources">
        <h3>Official Resources</h3>
        <ul>
          <li>
            <a href="https://pinia.vuejs.org/" target="_blank" rel="noopener">
              Pinia Documentation
            </a>
          </li>
          <li>
            <a href="https://pinia.vuejs.org/core-concepts/" target="_blank" rel="noopener">
              Core Concepts
            </a>
          </li>
          <li>
            <a href="https://pinia.vuejs.org/cookbook/" target="_blank" rel="noopener">
              Cookbook
            </a>
          </li>
          <li>
            <a href="https://pinia.vuejs.org/api/" target="_blank" rel="noopener">
              API Reference
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
.pinia {
  max-width: 1024px;
  margin: 0 auto;
  padding: 2rem 1rem;
}

.pinia-content h1 {
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

.concepts ul,
.resources ul {
  list-style-type: disc;
  padding-left: 1.5rem;
  line-height: 1.8;
}

.concepts li,
.resources li {
  margin-bottom: 0.3rem;
}

.resources a {
  color: var(--color-text);
  text-decoration: none;
  border-bottom: 1px solid transparent;
  transition: border-color 0.3s;
}

.resources a:hover {
  border-bottom-color: var(--color-text);
}

.pinia-content h1,
.pinia-content h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .pinia {
    min-height: 100vh;
    display: flex;
    align-items: center;
    padding: 2rem;
  }

  .pinia-content h1,
  .pinia-content h3 {
    text-align: left;
  }

  .description p {
    font-size: 1.2rem;
  }
}
</style>
