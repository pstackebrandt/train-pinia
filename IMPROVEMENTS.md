# Project Improvements

## Purpose

This document tracks potential improvements and enhancements for the project
that are not specific to Pinia state management features. This includes UI
components, styling approaches, build configuration, tooling, and other
general project enhancements.

**Note**: For Pinia-specific features and state management patterns, see
`pinia-ideas.md`.

## UI/Component Improvements

### Naive UI Typography Components

**Current State**: The project uses a hybrid approach where Naive UI components
(`NCard`, `NButton`, `NList`, etc.) are used for interactive elements, while
custom CSS handles typography (`h1`, `h3`, `p`) and layout containers. This
pattern is consistent across all views (`PiniaView`, `AboutView`,
`CounterDisplayView`, `ResourcesView`, `CounterEditorView`).

**Potential Improvement**: Naive UI provides typography components that would
be more "Naive UI native":

- `NH1`, `NH2`, `NH3` - Heading components
- `NP` - Paragraph component
- `NText` - Text component with various styles
- `NTypography` - Typography container component

**Benefits**:

- Better integration with Naive UI's design system
- Automatic theme support (light/dark mode)
- Consistent spacing and typography across the application
- Less custom CSS to maintain

**Consideration**: This would require refactoring all views simultaneously to
maintain consistency. The current approach works well and is consistent within
the project, so this is an optional enhancement rather than a requirement.

**Example Migration**:

```vue
<!-- Current approach -->
<h1>About Pinia</h1>
<p>Pinia is the official state management library...</p>

<!-- Naive UI approach -->
<NH1>About Pinia</NH1>
<NP>Pinia is the official state management library...</NP>
```

**Affected Files**:

- `src/views/PiniaView.vue`
- `src/views/AboutView.vue`
- `src/views/CounterDisplayView.vue`
- `src/views/ResourcesView.vue`
- `src/components/CounterEditor.vue`
- `src/components/ProjectInfo.vue`


