export default {
  title: 'Anwendungseinstellungen',
  description:
    'Konfigurieren Sie hier Ihre Anwendungseinstellungen. Die Einstellungen werden mit Pinia-Stores verwaltet und bleiben über Browsersitzungen hinweg erhalten, indem localStorage verwendet wird.',
  themeTitle: 'Design-Einstellungen',
  themeDescription:
    'Wählen Sie Ihr bevorzugtes Design. Die Design-Präferenz wird automatisch gespeichert und bleibt erhalten, wenn Sie die Seite neu laden oder später zur Anwendung zurückkehren.',
  languageTitle: 'Spracheinstellungen',
  languageDescription:
    'Wählen Sie Ihre bevorzugte Sprache. Die Sprachpräferenz wird automatisch gespeichert und bleibt erhalten, wenn Sie die Seite neu laden oder später zur Anwendung zurückkehren.',
  currentLanguage: 'Aktuelle Sprache:',
  aboutTitle: 'Über den Einstellungs-Store',
  aboutDescription:
    'Der Einstellungs-Store zeigt, wie Pinia zur Verwaltung anwendungsweiter Präferenzen verwendet werden kann. Dieser Store enthält:',
  aboutState: 'Zustand:',
  aboutStateDesc: 'Design-Präferenz als reaktive Referenz gespeichert',
  aboutActions: 'Aktionen:',
  aboutActionsDesc: 'Funktionen zum Umschalten oder expliziten Setzen des Designs',
  aboutComputed: 'Berechnete Eigenschaften:',
  aboutComputedDesc: 'Abgeleitete Werte wie isDark für Bequemlichkeit',
  aboutPersistence: 'Persistenz:',
  aboutPersistenceDesc: 'Automatisches Speichern in localStorage mit pinia-plugin-persistedstate',
  translationInfo: 'Übersetzungsinformationen',
  translationInfoDesc: 'Die folgenden Teile der Anwendung wurden übersetzt:',
  translationInfoMenus: 'Navigationsmenüs',
  translationInfoSettings: 'Einstellungsseite',
  translationInfoHome: 'Startseite',
} as const
