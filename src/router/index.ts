import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    // Routes below use dynamic imports for code-splitting:
    // each route generates a separate chunk that is lazy-loaded
    // when the route is visited, reducing initial bundle size.
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/counter-editor',
      name: 'counter-editor',
      component: () => import('../views/CounterEditorView.vue'),
    },
    {
      path: '/counter-display',
      name: 'counter-display',
      component: () => import('../views/CounterDisplayView.vue'),
    },
    {
      path: '/pinia',
      name: 'pinia',
      component: () => import('../views/PiniaView.vue'),
    },
    {
      path: '/resources',
      name: 'resources',
      component: () => import('../views/ResourcesView.vue'),
    },
    {
      path: '/settings',
      name: 'settings',
      component: () => import('../views/SettingsView.vue'),
    },
  ],
})

export default router
