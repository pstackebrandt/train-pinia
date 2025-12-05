<script setup lang="ts">
import ProjectInfo from '../components/ProjectInfo.vue'
</script>

<template>
  <div class="content-wrapper">
    <ProjectInfo />
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
