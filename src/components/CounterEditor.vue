<!--
  CounterEditor Component

  A reusable Vue component that displays and edits a counter interface
  with state management via Pinia. This component provides a complete
  counter UI including display and control buttons.

  Props:
    - pageTitle (string, required): The title displayed at the top
      of the counter editor.

  Features:
    - Integrates with Pinia counter store (useCounterStore) for
      state management
    - Displays the current count value from the store
    - Provides three action buttons:
      * Increment: Increases the counter by 1
      * Decrement: Decreases the counter by 1
      * Reset: Resets the counter to 0
    - Includes informational text about Pinia usage
    - Uses scoped styles for component-specific styling

  Usage:
    <CounterEditor pageTitle="My Counter Page" />
-->
<script setup lang="ts">
import { useCounterStore } from '../stores/counter'
const counterStore = useCounterStore()
defineProps<{
  pageTitle: string
}>()
</script>

<template>
  <div>
    <h1 class="page-title">{{ pageTitle }}</h1>
    <h3>We are using Pinia to manage the state of the application.</h3>
    <p>The count is {{ counterStore.count }}.</p>
    <button @click="counterStore.increment">Increment</button>
    <button @click="counterStore.decrement">Decrement</button>
    <button @click="counterStore.reset">Reset</button>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

h1.page-title,
h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  h1.page-title,
  h3 {
    text-align: left;
  }
}
</style>
