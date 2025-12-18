/**
 * i18n Type Definitions
 *
 * Defines the structure of translation messages for type safety.
 * Uses English locale files as the reference structure to ensure
 * all translation files (en/de) maintain consistent key names.
 */
import type commonEn from './locales/common.en'
import type menuEn from './locales/menu.en'
import type settingsEn from './locales/settings.en'
import type homeEn from './locales/home.en'

export type TranslationMessages = {
  menu: Record<keyof typeof menuEn, string>
  settings: Record<keyof typeof settingsEn, string>
  home: Record<keyof typeof homeEn, string>
  theme: Record<keyof typeof commonEn.theme, string>
  language: Record<keyof typeof commonEn.language, string>
}
