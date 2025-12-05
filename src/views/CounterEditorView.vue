<!--
  CounterEditorView Component

  A Vue view component that serves as the counter editor page/route in the
  application. This view wraps the CounterEditor component to provide
  a complete counter interface page.

  Features:
    - Displays the CounterEditor component with a page title
    - Serves as a route view for the counter editor functionality
    - Responsive layout using Naive UI components

  Usage:
    This component is typically used as a route view in Vue Router.
-->
<script setup lang="ts">
import CounterEditor from '../components/CounterEditor.vue'
</script>

<template>
  <div class="content-wrapper">
    <CounterEditor pageTitle="Counter editor" />
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

@media (min-width: 1024px) {
  .content-wrapper {
    padding: 2rem;
  }
}
</style>
