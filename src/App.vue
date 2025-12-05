<!--
  App Component

  The root Vue component that serves as the main application layout.
  This component provides the navigation header and router view container
  for the entire application.

  Features:
    - Responsive navigation header with links to Home, About, Counter Editor,
      Counter Display, Pinia, Resources, and Settings pages
    - Mobile drawer menu for small screens
    - Horizontal menu for desktop screens
    - RouterView container for rendering route components
    - Theme support (light/dark mode) via Naive UI NConfigProvider

  Usage:
    This component is the root component mounted in main.ts and serves
    as the entry point for the Vue application.
-->
<script setup lang="ts">
import { RouterLink, RouterView, useRoute } from 'vue-router'
import {
  NConfigProvider,
  NLayout,
  NLayoutHeader,
  NLayoutContent,
  NMenu,
  NDrawer,
  NButton,
  darkTheme,
  lightTheme,
} from 'naive-ui'
import { computed, h, ref } from 'vue'
import type { MenuOption } from 'naive-ui'
import { useSettingsStore } from './stores/settings'

const route = useRoute()
const showMobileMenu = ref(false)
const settingsStore = useSettingsStore()

const naiveTheme = computed(() => (settingsStore.isDark ? darkTheme : lightTheme))

const menuOptions: MenuOption[] = [
  {
    label: () => h(RouterLink, { to: '/' }, { default: () => 'Home' }),
    key: '/',
  },
  {
    label: () => h(RouterLink, { to: '/about' }, { default: () => 'About' }),
    key: '/about',
  },
  {
    label: () =>
      h(
        RouterLink,
        { to: '/counter-editor' },
        {
          default: () => 'Counter Editor',
        },
      ),
    key: '/counter-editor',
  },
  {
    label: () =>
      h(
        RouterLink,
        { to: '/counter-display' },
        {
          default: () => 'Counter Display',
        },
      ),
    key: '/counter-display',
  },
  {
    label: () => h(RouterLink, { to: '/pinia' }, { default: () => 'Pinia' }),
    key: '/pinia',
  },
  {
    label: () =>
      h(
        RouterLink,
        { to: '/resources' },
        {
          default: () => 'Resources',
        },
      ),
    key: '/resources',
  },
  {
    label: () => h(RouterLink, { to: '/settings' }, { default: () => 'Settings' }),
    key: '/settings',
  },
]

const activeKey = computed(() => route.path)

const handleMenuClick = () => {
  showMobileMenu.value = false
}
</script>

<template>
  <NConfigProvider :theme="naiveTheme">
    <NLayout :has-sider="false">
      <NLayoutHeader bordered>
        <NButton class="mobile-menu-button" @click="showMobileMenu = true"> ☰ </NButton>
        <NMenu class="desktop-menu" mode="horizontal" :options="menuOptions" :value="activeKey" />
      </NLayoutHeader>
      <NDrawer v-model:show="showMobileMenu" placement="left" width="250">
        <NMenu
          mode="vertical"
          :options="menuOptions"
          :value="activeKey"
          @update:value="handleMenuClick"
        />
      </NDrawer>
      <NLayoutContent>
        <RouterView />
      </NLayoutContent>
    </NLayout>
  </NConfigProvider>
</template>

<style scoped>
.mobile-menu-button {
  display: block;
}

.desktop-menu {
  display: none;
}

@media (min-width: 768px) {
  .mobile-menu-button {
    display: none;
  }

  .desktop-menu {
    display: flex;
  }
}
</style>
