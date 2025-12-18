# Project Improvements

## Purpose

This document tracks potential improvements and enhancements for the project
that are not specific to Pinia state management features. This includes UI
components, styling approaches, build configuration, tooling, and other
general project enhancements.

**Note**: For Pinia-specific features and state management patterns, see
`pinia-ideas.md`.

## Table of Contents

- [Completed Improvements](#completed-improvements) (✅ Implemented)
  - [Naive UI Typography Components](#naive-ui-typography-components) (✅ Implemented)
  - [Internationalization (i18n) Support](#internationalization-i18n-support) (✅ Implemented)
- [UI/Component Improvements](#uicomponent-improvements) (📋 Open)
- [Technical Debt / Known Issues](#technical-debt--known-issues) (⚠️ Open)
  - [TypeScript Typing Issue with vue-i18n Locale Property](#typescript-typing-issue-with-vue-i18n-locale-property) (⚠️ Open)

## Completed Improvements

### Naive UI Typography Components

**Status**: ✅ **Completed**

**Implementation**: All HTML typography elements (`h1`, `h3`, `p`) have been
migrated to Naive UI typography components (`NH1`, `NH3`, `NP`) across all
views and components.

**Changes Made**:

- Replaced all `h1` elements with `NH1` components
- Replaced all `h3` elements with `NH3` components
- Replaced all `p` elements with `NP` components
- Removed custom typography CSS rules (`h1`, `h3`, `p`)
- Preserved component-specific styling using `:deep()` selectors where needed
- Maintained existing class attributes (e.g., `green` class, `info-text` class)

**Benefits Achieved**:

- Automatic theme support (light/dark mode)
- Consistent typography spacing across the application
- Better integration with Naive UI's design system
- Reduced custom CSS maintenance

**Files Updated**:

- `src/views/PiniaView.vue`
- `src/views/AboutView.vue`
- `src/views/CounterDisplayView.vue`
- `src/views/ResourcesView.vue`
- `src/views/SettingsView.vue`
- `src/components/CounterEditor.vue`
- `src/components/ProjectInfo.vue`

****

### Internationalization (i18n) Support

**Status**: ✅ **Completed**

**Implementation**: Added internationalization support for English and German using `vue-i18n`. Language preference is stored in Pinia settings store and persists via localStorage.

**Features**:

- Language toggle button in header (shows current language code: EN/DE)
- Language selector in Settings page with translation information
- Translations for navigation menus, settings page, and home page
- Reactive language switching - UI updates immediately when language changes

**Translation Files Structure**:

- Organized by view/component: `menu.en.ts`, `menu.de.ts`, `settings.en.ts`, `settings.de.ts`, `home.en.ts`, `home.de.ts`
- Shared translations: `common.en.ts`, `common.de.ts`
- TypeScript types: `src/i18n/types.ts`

**Changes Made**:

- Installed `vue-i18n` package
- Created i18n configuration and translation files
- Extended settings store with language state and actions
- Updated components to use translations (menu, settings, home)
- Added language toggle button in header
- Updated tests to support i18n

**Files Created**:

- `src/i18n/index.ts` - i18n configuration
- `src/i18n/types.ts` - TypeScript types
- `src/i18n/locales/common.en.ts` / `common.de.ts` - Shared translations
- `src/i18n/locales/menu.en.ts` / `menu.de.ts` - Menu translations
- `src/i18n/locales/settings.en.ts` / `settings.de.ts` - Settings translations
- `src/i18n/locales/home.en.ts` / `home.de.ts` - Home page translations

**Files Updated**:

- `package.json` - Added vue-i18n dependency
- `src/main.ts` - Initialize i18n plugin
- `src/stores/settings.ts` - Added language state and actions
- `src/App.vue` - Menu translations and language toggle
- `src/views/SettingsView.vue` - Settings translations and language selector
- `src/components/ProjectInfo.vue` - Home view translations
- `src/components/__tests__/ProjectInfo.spec.ts` - Added i18n support

**Benefits Achieved**:

- Multi-language support (English and German)
- Type-safe translation keys
- Easy to extend with additional languages
- Language preference persists across sessions

## UI/Component Improvements

_No pending improvements at this time._

## Technical Debt / Known Issues

### TypeScript Typing Issue with vue-i18n Locale Property

**Status**: ⚠️ **Known Issue** - Code works at runtime but TypeScript reports error

**Location**: `src/App.vue:51-54`, `src/views/SettingsView.vue:32`, `src/main.ts:24`, `src/components/__tests__/ProjectInfo.spec.ts:41,50`

**Problem**:
TypeScript incorrectly infers `i18n.global.locale` as the literal union type `"en" | "de"` instead of `Ref<"en" | "de">`, causing the error:

```
Property 'value' does not exist on type '"en" | "de"'. Did you mean 'valueOf'?
```

**Root Cause**:
The generic type parameters for `createI18n` in `src/i18n/index.ts` are not correctly typed, causing TypeScript to lose the `Ref` type information for the `locale` property.

**Solution**:
Update `src/i18n/index.ts` to use proper generic type parameters:

```typescript
const i18n = createI18n<{
  legacy: false
  locale: SupportedLocale
  messages: {
    en: TranslationMessages
    de: TranslationMessages
  }
}>({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  messages: {
    en,
    de,
  },
})
```

**Alternative Solution** (if the above doesn't work):
Use type assertion in watch callbacks:

```typescript
(i18n.global.locale as Ref<SupportedLocale>).value = newLanguage
```

**Impact**:

- Runtime: None - code works correctly
- Development: TypeScript errors in IDE, but doesn't block functionality
- Priority: Low - can be fixed later
