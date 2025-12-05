<!--
  CounterEditorView Component

  A Vue view component that serves as the counter editor page/route in the
  application. This view wraps the CounterEditor component to provide
  a complete counter interface page.

  Features:
    - Displays the CounterEditor component with a page title
    - Serves as a route view for the counter editor functionality

  Usage:
    This component is typically used as a route view in Vue Router.
-->
<script setup lang="ts">
import CounterEditor from '../components/CounterEditor.vue'
</script>

<template>
  <main>
    <CounterEditor pageTitle="Counter editor" />
  </main>
</template>

<style scoped>
/* No styles needed - component styling handled by child
   components */
</style>
