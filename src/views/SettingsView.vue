<!--
  SettingsView Component

  A Vue view component that serves as the settings page/route in the
  application. This view displays application settings, particularly
  theme preferences, and allows users to configure them.

  Features:
    - Displays information about theme settings
    - Provides controls to toggle between light and dark themes
    - Shows current theme state
    - Demonstrates Pinia store usage for application settings
    - Responsive layout using Naive UI components

  Usage:
    This component is typically used as a route view in Vue Router.
-->
<script setup lang="ts">
import { NCard, NButton, NSpace, NRadioGroup, NRadio } from 'naive-ui'
import { useSettingsStore } from '../stores/settings'

const settingsStore = useSettingsStore()
</script>

<template>
  <div class="content-wrapper">
    <NCard>
      <h1>Application Settings</h1>
      <p>
        Configure your application preferences here. Settings are managed
        using Pinia stores and persist across browser sessions using
        localStorage.
      </p>

      <div class="section">
        <h3>Theme Settings</h3>
        <p>
          Choose your preferred theme. The theme preference is saved
          automatically and will persist when you reload the page or return
          to the application later.
        </p>
        <p>
          <strong>Current theme:</strong> {{ settingsStore.theme }}
        </p>

        <div class="controls">
          <NSpace vertical :size="16">
            <div>
              <NRadioGroup
                :value="settingsStore.theme"
                @update:value="settingsStore.setTheme"
              >
                <NSpace>
                  <NRadio value="light"> Light </NRadio>
                  <NRadio value="dark"> Dark </NRadio>
                </NSpace>
              </NRadioGroup>
            </div>
            <div>
              <NButton type="primary" @click="settingsStore.toggleTheme">
                Toggle Theme
              </NButton>
            </div>
          </NSpace>
        </div>
      </div>

      <div class="section">
        <h3>About Settings Store</h3>
        <p>
          The settings store demonstrates how Pinia can be used to manage
          application-wide preferences. This store includes:
        </p>
        <ul>
          <li>
            <strong>State:</strong> Theme preference stored as a reactive
            reference
          </li>
          <li>
            <strong>Actions:</strong> Functions to toggle or set the theme
            explicitly
          </li>
          <li>
            <strong>Computed Properties:</strong> Derived values like
            <code>isDark</code> for convenience
          </li>
          <li>
            <strong>Persistence:</strong> Automatic saving to localStorage
            using pinia-plugin-persistedstate
          </li>
        </ul>
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

.controls {
  margin-top: 1rem;
}

ul {
  margin-left: 1.5rem;
  margin-bottom: 1rem;
}

li {
  margin-bottom: 0.5rem;
  line-height: 1.6;
}

code {
  background-color: var(--n-code-color);
  padding: 0.125rem 0.375rem;
  border-radius: 0.25rem;
  font-family: monospace;
  font-size: 0.9em;
}

@media (min-width: 1024px) {
  .content-wrapper {
    padding: 2rem;
  }
}
</style>

