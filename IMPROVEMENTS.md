# Project Improvements

## Purpose

This document tracks potential improvements and enhancements for the project
that are not specific to Pinia state management features. This includes UI
components, styling approaches, build configuration, tooling, and other
general project enhancements.

**Note**: For Pinia-specific features and state management patterns, see
`pinia-ideas.md`.

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

## UI/Component Improvements

_No pending improvements at this time._
