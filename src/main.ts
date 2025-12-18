/**
 * Application Entry Point
 *
 * Initializes the Vue application and configures all plugins.
 * Sets up Pinia (with persistence), Vue Router, and vue-i18n.
 * Synchronizes i18n locale with persisted settings on startup.
 */
import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import App from './App.vue'
import router from './router'
import i18n from './i18n'
import { useSettingsStore } from './stores/settings'

const app = createApp(App)

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

app.use(pinia)
app.use(router)
app.use(i18n)

// Sync i18n locale with settings store
const settingsStore = useSettingsStore()
if (settingsStore.language) {
  i18n.global.locale.value = settingsStore.language
}

app.mount('#app')
