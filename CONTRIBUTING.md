# Contributing to Train Pinia

Thank you for your interest in contributing to Train Pinia! This document
provides guidelines and best practices for contributing to this project.

**Note for AI Coding Assistants**: This file is the primary source of truth
for development guidelines.

## Table of Contents

- [Documentation Updates](#documentation-updates)
- [Code Style](#code-style)
- [File Organization](#file-organization)
- [Testing Guidelines](#testing-guidelines)
- [Commit Message Conventions](#commit-message-conventions)
- [Pinia Store Patterns](#pinia-store-patterns)
- [Development Workflow](#development-workflow)

## Documentation Updates

**Important**: Keep documentation concise and useful. Avoid redundancy and
verbosity. Quality over quantity - document what's needed, not everything.

When implementing new features or making significant changes:

### 1. Check if functional changes need documentation

- Update `IMPROVEMENTS.md` in "Completed Improvements" section for new
  features
- Update `README.md` if technologies or setup changes
- Update `pinia-ideas.md` for Pinia-specific features

### 2. Documentation files to check

- `README.md` - Project overview, technologies, setup
- `IMPROVEMENTS.md` - Completed improvements and technical debt
- `pinia-ideas.md` - Pinia-specific features and patterns

### 3. After implementing features

- Document what was implemented (be concise)
- List files created/modified (avoid redundancy)
- Note any breaking changes or migration needed
- Update technology list if new dependencies added

### 4. Documentation Quality Guidelines

- **Be concise**: Remove redundant explanations and verbose descriptions
- **Avoid duplication**: Don't repeat information already documented elsewhere
- **Focus on essentials**: Document what's needed, not everything
- **Update existing docs**: Improve existing documentation rather than adding
  new sections when possible
- **Check for redundancy**: Review existing docs before adding new content

## Code Style

### General Guidelines

- Follow existing code style and patterns in the codebase
- Use TypeScript where useful for type safety
- Keep lines under 65 characters when possible (but code quality is
  priority)
- Preserve existing comments unless explicitly asked to update/remove
- Use meaningful variable and function names

### Vue Component Style

- Use Composition API with `<script setup>` syntax
- Keep component logic organized (imports, composables, state, computed,
  functions)
- Include JSDoc comments for complex component logic
- Use Naive UI components for consistency
- Prefer Naive UI typography components (`NH1`, `NH3`, `NP`) over native HTML
  elements

### TypeScript

- Prefer explicit types over `any`
- Use `type` for object shapes, `interface` for extensible contracts
- Export types that are used across multiple files
- Use `as const` for readonly literal types

### Formatting

- Use Prettier for code formatting (run `pnpm format`)
- Use ESLint for linting (run `pnpm lint`)
- Both tools are configured in the project

## File Organization

### Translation Files (i18n)

- Use `.en.ts` suffix for English translations
- Use `.de.ts` suffix for German translations
- Organize by feature/view (e.g., `menu.en.ts`, `settings.en.ts`)
- Keep shared translations in `common.en.ts` / `common.de.ts`
- Export types in `src/i18n/types.ts` for type safety

### Component Structure

``` text
src/
├── components/        # Reusable components
│   ├── __tests__/    # Component tests
│   └── icons/        # Icon components
├── views/            # Route views
├── stores/           # Pinia stores
├── i18n/             # Internationalization
│   ├── locales/      # Translation files
│   └── types.ts      # i18n TypeScript types
└── router/           # Vue Router configuration
```

### Naming Conventions

- Components: PascalCase (e.g., `ProjectInfo.vue`)
- Stores: camelCase (e.g., `counter.ts`, `settings.ts`)
- Views: PascalCase with "View" suffix (e.g., `HomeView.vue`)
- Translation files: lowercase with language suffix (e.g., `menu.en.ts`)
- Test files: Same name as component with `.spec.ts` suffix
  (e.g., `ProjectInfo.spec.ts`)

## Testing Guidelines

### Running Tests

```bash
pnpm test:unit
```

### Writing Tests

- Write tests for all new components
- Use `@vue/test-utils` for Vue component testing
- Include i18n plugin in component tests that use translations
- Test key functionality and edge cases
- Keep tests focused and readable

### Test Structure

```typescript
import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import i18n from '../../i18n'
import MyComponent from '../MyComponent.vue'

describe('MyComponent', () => {
  it('renders properly', () => {
    const wrapper = mount(MyComponent, {
      global: {
        plugins: [i18n],
      },
    })
    expect(wrapper.text()).toContain('Expected text')
  })
})
```

## Commit Message Conventions

Use clear, descriptive commit messages:

### Format

``` text
type: Brief description (max 50 characters)

Optional longer description explaining the change.
Include motivation and context if needed.
```

### Types

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, no logic change)
- `refactor`: Code refactoring (no feature change or bug fix)
- `test`: Adding or updating tests
- `chore`: Maintenance tasks (dependencies, config, etc.)

### Examples

``` text
feat: add German translation support

Implemented vue-i18n with English and German translations.
Updated menu, settings, and home page with translations.
```

``` text
fix: correct TypeScript type for i18n locale

Updated createI18n generic parameters to properly type
the locale property as Ref<SupportedLocale>.
```

## Pinia Store Patterns

Since this is a Pinia learning project, follow these patterns:

- Use `defineStore` with setup function syntax (not options API)
- Store state using `ref()` for reactive values
- Use `computed()` for derived state
- Export actions as functions
- Use `pinia-plugin-persistedstate` for persistence when needed

Example:

```typescript
export const useMyStore = defineStore('myStore', () => {
  const state = ref<Type>(initialValue)
  const derived = computed(() => /* ... */)
  
  function action() { /* ... */ }
  
  return { state, derived, action }
}, { persist: { /* ... */ } })
```

## Development Workflow

### 1. Setup

```bash
pnpm install
```

### 2. Development

```bash
pnpm dev
```

### 3. Before Committing

```bash
# Run linter
pnpm lint

# Run tests
pnpm test:unit

# Check types
pnpm type-check
```

### 4. Building

```bash
pnpm build
```

### 5. Preview Production Build

```bash
pnpm preview
```

## Questions or Issues?

If you have questions or encounter issues while contributing:

1. Check existing documentation (README, IMPROVEMENTS, pinia-ideas)
2. Review existing code for patterns and conventions
3. Open an issue for discussion if needed

Thank you for contributing! 🎉
