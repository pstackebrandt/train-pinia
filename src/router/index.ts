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
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/counter-editor',
      name: 'counter-editor',
      // route level code-splitting
      // this generates a separate chunk (CounterEditor.[hash].js) for
      // this route which is lazy-loaded when the route is visited.
      component: () => import('../views/CounterEditorView.vue'),
    },
    {
      path: '/counter-display',
      name: 'counter-display',
      // route level code-splitting
      // this generates a separate chunk (CounterDisplay.[hash].js) for
      // this route which is lazy-loaded when the route is visited.
      component: () => import('../views/CounterDisplayView.vue'),
    },
    {
      path: '/pinia',
      name: 'pinia',
      // route level code-splitting
      // this generates a separate chunk (Pinia.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/PiniaView.vue'),
    },
    {
      path: '/resources',
      name: 'resources',
      // route level code-splitting
      // this generates a separate chunk (Resources.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ResourcesView.vue'),
    },
  ],
})

export default router
