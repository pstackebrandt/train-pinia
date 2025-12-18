const settingsEn = {
  title: 'Application Settings',
  description:
    'Configure your application preferences here. Settings are managed using Pinia stores and persist across browser sessions using localStorage.',
  themeTitle: 'Theme Settings',
  themeDescription:
    'Choose your preferred theme. The theme preference is saved automatically and will persist when you reload the page or return to the application later.',
  languageTitle: 'Language Settings',
  languageDescription:
    'Choose your preferred language. The language preference is saved automatically and will persist when you reload the page or return to the application later.',
  currentLanguage: 'Current language:',
  aboutTitle: 'About Settings Store',
  aboutDescription:
    'The settings store demonstrates how Pinia can be used to manage application-wide preferences. This store includes:',
  aboutState: 'State:',
  aboutStateDesc: 'Theme preference stored as a reactive reference',
  aboutActions: 'Actions:',
  aboutActionsDesc: 'Functions to toggle or set the theme explicitly',
  aboutComputed: 'Computed Properties:',
  aboutComputedDesc: 'Derived values like isDark for convenience',
  aboutPersistence: 'Persistence:',
  aboutPersistenceDesc:
    'Automatic saving to localStorage using pinia-plugin-persistedstate',
  translationInfo: 'Translation Information',
  translationInfoDesc:
    'The following parts of the application have been translated:',
  translationInfoMenus: 'Navigation menus',
  translationInfoSettings: 'Settings page',
  translationInfoHome: 'Home page',
} as const

export default settingsEn

