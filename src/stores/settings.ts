import { computed, ref } from 'vue'
import { defineStore } from 'pinia'

/**
 * @summary Stores application settings including theme preferences.
 * @description Uses pinia to manage application settings state,
 * particularly theme (light/dark mode) preferences.
 */

// Configuration constants
const DEFAULT_THEME = 'light' as const
type Theme = 'light' | 'dark'

export const useSettingsStore = defineStore(
  'settings',
  () => {
    const theme = ref<Theme>(DEFAULT_THEME)

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

    return {
      theme,
      isDark,
      toggleTheme,
      setTheme,
    }
  },
  {
    persist: {
      key: 'settings',
      storage: localStorage,
    },
  },
)

