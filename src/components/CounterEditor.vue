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
      * Decrement: Decreases the counter by 1 (disabled when at
        lower bound)
      * Reset: Resets the counter to initial value (disabled when
        value hasn't changed)
    - State persists across browser sessions using localStorage
    - Includes informational text about Pinia usage
    - Uses Naive UI components for consistent styling

  Usage:
    <CounterEditor pageTitle="My Counter Page" />
-->
<script setup lang="ts">
import { NButton, NCard, NSpace, NH1, NP } from 'naive-ui'
import { useCounterStore } from '../stores/counter'

const counterStore = useCounterStore()
defineProps<{
  pageTitle: string
}>()
</script>

<template>
  <NCard>
    <NH1>{{ pageTitle }}</NH1>
    <NP>We are using Pinia to manage the state of the application.</NP>
    <NP>
      The counter state persists across browser sessions using localStorage. Try refreshing the page
      or closing and reopening the browser - your count will be preserved!
    </NP>
    <NP>The count is {{ counterStore.count }}.</NP>
    <NSpace :size="12">
      <NButton type="primary" @click="counterStore.increment"> Increment </NButton>
      <NButton @click="counterStore.decrement" :disabled="!counterStore.canDecrement">
        Decrement
      </NButton>
      <NButton @click="counterStore.reset" :disabled="!counterStore.canReset"> Reset </NButton>
    </NSpace>
  </NCard>
</template>

<style scoped></style>
