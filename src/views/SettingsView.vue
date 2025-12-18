<!--
  SettingsView Component

  A Vue view component that serves as the settings page/route in the
  application. This view displays and allows configuration of application
  settings including theme and language preferences.

  Features:
    - Theme settings: Radio buttons to select light or dark theme with
      current state display
    - Language settings: Radio buttons to select English or German with
      current language display
    - Fully internationalized content using vue-i18n
    - Automatic locale synchronization with settings store changes
    - Displays information about translation coverage
    - Educational content about Pinia store structure and persistence
    - Integrates with Pinia settings store for state management
    - Responsive layout using Naive UI components (1024px breakpoint)

  Usage:
    Used as a route view in Vue Router at the '/settings' path.
-->
<script setup lang="ts">
import { NCard, NSpace, NRadioGroup, NRadio, NH1, NH3, NP } from 'naive-ui'
import { useSettingsStore } from '../stores/settings'
import { useI18n } from 'vue-i18n'
import i18n from '../i18n'
import { watch, computed } from 'vue'

const settingsStore = useSettingsStore()
const { t } = useI18n()

// Sync i18n locale with settings store changes
watch(
  () => settingsStore.language,
  (newLanguage) => {
    i18n.global.locale.value = newLanguage
  },
)

const currentLanguageName = computed(() => {
  return settingsStore.language === 'en' ? t('language.english') : t('language.german')
})
</script>

<template>
  <div class="content-wrapper">
    <NCard>
      <NH1>{{ t('settings.title') }}</NH1>
      <NP>
        {{ t('settings.description') }}
      </NP>

      <div class="section">
        <NH3>{{ t('settings.themeTitle') }}</NH3>
        <NP>
          {{ t('settings.themeDescription') }}
        </NP>
        <NP
          ><strong>{{ t('theme.currentTheme') }}</strong> {{ settingsStore.theme }}</NP
        >

        <div class="controls">
          <NRadioGroup :value="settingsStore.theme" @update:value="settingsStore.setTheme">
            <NSpace>
              <NRadio value="light"> {{ t('theme.light') }} </NRadio>
              <NRadio value="dark"> {{ t('theme.dark') }} </NRadio>
            </NSpace>
          </NRadioGroup>
        </div>
      </div>

      <div class="section">
        <NH3>{{ t('settings.languageTitle') }}</NH3>
        <NP>
          {{ t('settings.languageDescription') }}
        </NP>
        <NP
          ><strong>{{ t('settings.currentLanguage') }}</strong> {{ currentLanguageName }}</NP
        >

        <div class="controls">
          <NRadioGroup :value="settingsStore.language" @update:value="settingsStore.setLanguage">
            <NSpace>
              <NRadio value="en"> {{ t('language.english') }} </NRadio>
              <NRadio value="de"> {{ t('language.german') }} </NRadio>
            </NSpace>
          </NRadioGroup>
        </div>
      </div>

      <div class="section">
        <NH3>{{ t('settings.translationInfo') }}</NH3>
        <NP>
          {{ t('settings.translationInfoDesc') }}
        </NP>
        <ul>
          <li>{{ t('settings.translationInfoMenus') }}</li>
          <li>{{ t('settings.translationInfoSettings') }}</li>
          <li>{{ t('settings.translationInfoHome') }}</li>
        </ul>
      </div>

      <div class="section">
        <NH3>{{ t('settings.aboutTitle') }}</NH3>
        <NP>
          {{ t('settings.aboutDescription') }}
        </NP>
        <ul>
          <li>
            <strong>{{ t('settings.aboutState') }}</strong> {{ t('settings.aboutStateDesc') }}
          </li>
          <li>
            <strong>{{ t('settings.aboutActions') }}</strong> {{ t('settings.aboutActionsDesc') }}
          </li>
          <li>
            <strong>{{ t('settings.aboutComputed') }}</strong> {{ t('settings.aboutComputedDesc') }}
          </li>
          <li>
            <strong>{{ t('settings.aboutPersistence') }}</strong>
            {{ t('settings.aboutPersistenceDesc') }}
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
