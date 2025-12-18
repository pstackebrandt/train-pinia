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
    - Internationalization (i18n) support with language toggle button
    - Translated menu items and UI labels (English/German)
    - Automatic locale synchronization with settings store

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
  NIcon,
  darkTheme,
  lightTheme,
} from 'naive-ui'
import { computed, h, ref, watch } from 'vue'
import type { MenuOption } from 'naive-ui'
import { useSettingsStore } from './stores/settings'
import { useI18n } from 'vue-i18n'
import i18n from './i18n'
import { Sunny, Moon } from '@vicons/ionicons5'

const route = useRoute()
const showMobileMenu = ref(false)
const settingsStore = useSettingsStore()
const { t } = useI18n()

const naiveTheme = computed(() => (settingsStore.isDark ? darkTheme : lightTheme))

// Sync i18n locale with settings store changes
watch(
  () => settingsStore.language,
  (newLanguage) => {
    i18n.global.locale.value = newLanguage
  },
)

const currentLanguageCode = computed(() => {
  return settingsStore.language.toUpperCase()
})

const menuOptions = computed<MenuOption[]>(() => [
  {
    label: () => h(RouterLink, { to: '/' }, { default: () => t('menu.home') }),
    key: '/',
  },
  {
    label: () => h(RouterLink, { to: '/about' }, { default: () => t('menu.about') }),
    key: '/about',
  },
  {
    label: () =>
      h(
        RouterLink,
        { to: '/counter-editor' },
        {
          default: () => t('menu.counterEditor'),
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
          default: () => t('menu.counterDisplay'),
        },
      ),
    key: '/counter-display',
  },
  {
    label: () => h(RouterLink, { to: '/pinia' }, { default: () => t('menu.pinia') }),
    key: '/pinia',
  },
  {
    label: () =>
      h(
        RouterLink,
        { to: '/resources' },
        {
          default: () => t('menu.resources'),
        },
      ),
    key: '/resources',
  },
  {
    label: () => h(RouterLink, { to: '/settings' }, { default: () => t('menu.settings') }),
    key: '/settings',
  },
])

const activeKey = computed(() => route.path)

const handleMenuClick = () => {
  showMobileMenu.value = false
}
</script>

<template>
  <NConfigProvider :theme="naiveTheme">
    <NLayout :has-sider="false">
      <NLayoutHeader bordered class="header">
        <NButton class="mobile-menu-button" @click="showMobileMenu = true"> ☰ </NButton>
        <NMenu class="desktop-menu" mode="horizontal" :options="menuOptions" :value="activeKey" />
        <NButton
          class="language-toggle-button"
          quaternary
          @click="settingsStore.toggleLanguage"
          :title="t('language.toggle')"
        >
          {{ currentLanguageCode }}
        </NButton>
        <NButton
          class="theme-toggle-button"
          quaternary
          @click="settingsStore.toggleTheme"
          :title="settingsStore.isDark ? t('theme.toggleToLight') : t('theme.toggleToDark')"
        >
          <NIcon :component="settingsStore.isDark ? Sunny : Moon" />
        </NButton>
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
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
}

.mobile-menu-button {
  display: block;
}

.desktop-menu {
  display: none;
  flex: 1;
}

.language-toggle-button {
  margin-left: auto;
}

.theme-toggle-button {
  margin-left: 0.5rem;
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
