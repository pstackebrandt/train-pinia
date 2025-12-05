# Pinia Ideas and Advanced Features

## Purpose

This document contains ideas and suggestions specifically related to Pinia
state management features. It focuses on extending your Pinia store
implementation beyond the basic counter example, including advanced patterns,
plugins, testing, and other Pinia-specific functionality.

**Note**: For general project improvements (UI components, styling, build
configuration, etc.), see `improvements.md`.

## Table of Contents

- [Pinia Ideas and Advanced Features](#pinia-ideas-and-advanced-features)
  - [Purpose](#purpose)
  - [Table of Contents](#table-of-contents)
  - [1. Getters - Computed Values Derived from State](#1-getters---computed-values-derived-from-state)
  - [2. Multiple Stores - Modular State Management](#2-multiple-stores---modular-state-management)
  - [3. Store Composition - Stores Using Other Stores](#3-store-composition---stores-using-other-stores)
  - [4. Persistent State - localStorage/sessionStorage](#4-persistent-state---localstoragesessionstorage)
  - [5. Async Actions - API Calls and Side Effects](#5-async-actions---api-calls-and-side-effects)
  - [6. Store Watchers - React to State Changes](#6-store-watchers---react-to-state-changes)
  - [7. Store Plugins - Extend Pinia Functionality](#7-store-plugins---extend-pinia-functionality)
  - [8. Options API Style Stores - Alternative Syntax](#8-options-api-style-stores---alternative-syntax)
  - [9. Store Reset - Reset State to Initial Values](#9-store-reset---reset-state-to-initial-values)
  - [10. Store Testing - Unit Test Your Stores](#10-store-testing---unit-test-your-stores)
  - [11. Undo/Redo - State History](#11-undoredo---state-history)
  - [12. Store Subscriptions - React to Changes](#12-store-subscriptions---react-to-changes)
  - [Quick Wins for Your Current Setup](#quick-wins-for-your-current-setup)
  - [Resources](#resources)

## 1. Getters - Computed Values Derived from State

Add computed properties to your store that derive values from your state:

```typescript
// In your counter store
const isEven = computed(() => count.value % 2 === 0)
const isPositive = computed(() => count.value > 0)
const doubleCount = computed(() => count.value * 2)
```

**Implemented**: You've added computed properties for validation:

- `canDecrement` - Returns true when count is greater than LOWER_BOUND
- `canReset` - Returns true when count differs from INITIAL_VALUE

These computed properties enable conditional button states in your UI.

## 2. Multiple Stores - Modular State Management

Create separate stores for different domains of your application:

- `user.ts` - Authentication and user profile data
- `todos.ts` - Todo items with CRUD operations
- ✅ `settings.ts` - Application preferences and themes (**Implemented**)
- `cart.ts` - Shopping cart functionality

**Implemented**: You've created a settings store (`src/stores/settings.ts`) that:

- Manages theme preferences (light/dark mode)
- Provides `toggleTheme()` and `setTheme()` actions
- Includes `isDark` computed property for convenience
- Persists theme preferences using localStorage
- Integrates with Naive UI's `NConfigProvider` for global theme application

## 3. Store Composition - Stores Using Other Stores

Have stores interact with each other:

```typescript
export const useUserStore = defineStore('user', () => {
  const name = ref('')
  // ...
})

export const useCartStore = defineStore('cart', () => {
  const userStore = useUserStore()
  // Access userStore.name, etc.
})
```

## 4. Persistent State - localStorage/sessionStorage

Use `pinia-plugin-persistedstate` to persist state across page reloads:

```typescript
import { defineStore } from 'pinia'

export const useSettingsStore = defineStore('settings', () => {
  const theme = ref('light')
  return { theme }
}, {
  persist: true // Automatically saves to localStorage
})
```

**Implemented**: You've added persistent state to multiple stores:

- Installed `pinia-plugin-persistedstate` package
- Registered the plugin in `main.ts`
- **Counter store**: Configured persistence with a custom key (`'counter'`) and `localStorage` storage - the counter state persists across page reloads
- **Settings store**: Configured persistence with a custom key (`'settings'`) and `localStorage` storage - theme preferences persist across page reloads

## 5. Async Actions - API Calls and Side Effects

Handle asynchronous operations in your stores:

```typescript
export const usePostsStore = defineStore('posts', () => {
  const posts = ref([])
  const loading = ref(false)
  const error = ref(null)

  async function fetchPosts() {
    loading.value = true
    try {
      const response = await fetch('/api/posts')
      posts.value = await response.json()
    } catch (e) {
      error.value = e
    } finally {
      loading.value = false
    }
  }

  return { posts, loading, error, fetchPosts }
})
```

## 6. Store Watchers - React to State Changes

Watch store properties for side effects:

```typescript
watch(() => counterStore.count, (newVal, oldVal) => {
  console.log(`Count changed from ${oldVal} to ${newVal}`)
})
```

## 7. Store Plugins - Extend Pinia Functionality

Create plugins for cross-cutting concerns (logging, analytics, etc.):

```typescript
pinia.use(({ store }) => {
  store.$subscribe((mutation, state) => {
    console.log(`Store ${store.$id} changed:`, mutation)
  })
})
```

## 8. Options API Style Stores - Alternative Syntax

Use the Options API syntax if you prefer:

```typescript
export const useCounterStore = defineStore('counter', {
  state: () => ({ count: 0 }),
  getters: {
    double: (state) => state.count * 2
  },
  actions: {
    increment() {
      this.count++
    }
  }
})
```

## 9. Store Reset - Reset State to Initial Values

Add a reset function to restore initial state:

```typescript
// Configuration constants
const LOWER_BOUND = 0
const INITIAL_VALUE = 0

// Computed property to check if reset is allowed
const canReset = computed(() => count.value !== INITIAL_VALUE)

function reset() {
  count.value = INITIAL_VALUE
}
```

**Implemented**: You've added a reset function that:

- Uses `INITIAL_VALUE` constant instead of hardcoded 0
- Includes `canReset` computed property to conditionally enable/disable the reset button
- Resets the counter to the configured initial value

## 10. Store Testing - Unit Test Your Stores

Test your store logic with Vitest (you already have it set up):

```typescript
import { setActivePinia, createPinia } from 'pinia'
import { useCounterStore } from './counter'

describe('Counter Store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('increments count', () => {
    const store = useCounterStore()
    store.increment()
    expect(store.count).toBe(1)
  })
})
```

## 11. Undo/Redo - State History

Implement undo/redo functionality:

```typescript
const history = ref<number[]>([])
const historyIndex = ref(-1)

function increment() {
  history.value.push(count.value)
  historyIndex.value = history.value.length - 1
  count.value++
}

function undo() {
  if (historyIndex.value > 0) {
    historyIndex.value--
    count.value = history.value[historyIndex.value]
  }
}
```

## 12. Store Subscriptions - React to Changes

Subscribe to store changes:

```typescript
counterStore.$subscribe((mutation, state) => {
  // React to changes
})
```

## Quick Wins for Your Current Setup

1. ✅ **Fix the todo**: Prevent counter from going below 0 (using `LOWER_BOUND` and `canDecrement`)
2. ✅ **Add getters**: `canDecrement`, `canReset` (computed properties for validation)
3. ✅ **Add validation**: Ensure count stays within bounds (using constants and computed properties)
4. ✅ **Multiple stores**: Created settings store for theme management with persistence
5. **Add history**: Track count changes over time

## Resources

- [Pinia Documentation](https://pinia.vuejs.org/)
- [Pinia GitHub](https://github.com/vuejs/pinia)
