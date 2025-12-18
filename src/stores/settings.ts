import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import type { SupportedLocale } from '../i18n'

/**
 * @summary Stores application settings including theme and language
 * preferences.
 * @description Uses pinia to manage application settings state,
 * particularly theme (light/dark mode) and language preferences.
 */

// Configuration constants
const DEFAULT_THEME = 'light' as const
const DEFAULT_LANGUAGE = 'en' as const
type Theme = 'light' | 'dark'

export const useSettingsStore = defineStore(
  'settings',
  () => {
    const theme = ref<Theme>(DEFAULT_THEME)
    const language = ref<SupportedLocale>(DEFAULT_LANGUAGE)

    /**
     * @summary Computed property indicating if dark theme is active.
     * @description Returns true when theme is set to 'dark'.
     */
    const isDark = computed(() => theme.value === 'dark')

    /**
     * @summary Toggles between light and dark theme.
     * @description Switches theme from light to dark or vice versa.
     */
    function toggleTheme() {
      theme.value = theme.value === 'light' ? 'dark' : 'light'
    }

    /**
     * @summary Sets the theme to a specific value.
     * @description Allows explicit theme setting to either 'light' or 'dark'.
     * @param {Theme} newTheme - The theme to set ('light' or 'dark').
     */
    function setTheme(newTheme: Theme) {
      theme.value = newTheme
    }

    /**
     * @summary Toggles between English and German language.
     * @description Switches language from English to German or vice versa.
     */
    function toggleLanguage() {
      language.value = language.value === 'en' ? 'de' : 'en'
    }

    /**
     * @summary Sets the language to a specific value.
     * @description Allows explicit language setting to either 'en' or 'de'.
     * @param {SupportedLocale} newLanguage - The language to set ('en' or 'de').
     */
    function setLanguage(newLanguage: SupportedLocale) {
      language.value = newLanguage
    }

    return {
      theme,
      isDark,
      toggleTheme,
      setTheme,
      language,
      toggleLanguage,
      setLanguage,
    }
  },
  {
    persist: {
      key: 'settings',
      storage: localStorage,
    },
  },
)

