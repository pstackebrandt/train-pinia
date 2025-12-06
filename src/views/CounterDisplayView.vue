<!--
  CounterDisplayView Component

  A Vue view component that serves as a read-only counter display page/route
  in the application. This view demonstrates that multiple views can access
  the same Pinia store data.

  Features:
    - Displays the counter value from the Pinia store in read-only mode
    - Shows that the counter can be accessed from multiple views
    - Updates reactively when the counter changes in other views
    - Responsive layout using Naive UI components

  Usage:
    This component is typically used as a route view in Vue Router.
-->
<script setup lang="ts">
import { NCard, NH1, NP } from 'naive-ui'
import { useCounterStore } from '../stores/counter'

const counterStore = useCounterStore()
</script>

<template>
  <div class="content-wrapper">
    <NCard>
      <NH1>Counter Display</NH1>
      <NP>
        This view demonstrates that the counter data from the Pinia store
        can be accessed from multiple views. This view is read-only and
        cannot modify the counter value.
      </NP>
      <NP>
        The current count is
        <strong class="count-value">{{ counterStore.count }}</strong>.
      </NP>
      <NP class="info-text">
        Try changing the counter in the Counter Editor view and watch
        this value update automatically!
      </NP>
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

.count-value {
  font-size: 1.5rem;
  color: var(--n-primary-color);
  font-weight: 600;
}

.info-text {
  font-style: italic;
  color: var(--n-text-color-2);
}

@media (min-width: 1024px) {
  .content-wrapper {
    padding: 2rem;
  }
}
</style>

