/**
 * i18n Configuration
 *
 * Centralizes internationalization setup for the application.
 * Aggregates translation files for English and German, creates
 * the vue-i18n instance, and exports it for use throughout the app.
 */
import { createI18n } from 'vue-i18n'
import commonEn from './locales/common.en'
import commonDe from './locales/common.de'
import menuEn from './locales/menu.en'
import menuDe from './locales/menu.de'
import settingsEn from './locales/settings.en'
import settingsDe from './locales/settings.de'
import homeEn from './locales/home.en'
import homeDe from './locales/home.de'
import type { TranslationMessages } from './types'

export type SupportedLocale = 'en' | 'de'

const en = {
  menu: menuEn,
  settings: settingsEn,
  home: homeEn,
  ...commonEn,
} satisfies TranslationMessages

const de = {
  menu: menuDe,
  settings: settingsDe,
  home: homeDe,
  ...commonDe,
} satisfies TranslationMessages

const i18n = createI18n<[TranslationMessages], SupportedLocale>({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  messages: {
    en,
    de,
  },
})

export default i18n
