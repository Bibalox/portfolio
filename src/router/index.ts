import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@views/HomeView.vue'),
      meta: { layout: 'default' }
    },
    {
      path: '/references',
      name: 'references',
      component: () => import('@views/ReferencesView.vue'),
      meta: { layout: 'default' }
    },
    {
      path: '/references/:id',
      component: () => import('@views/ReferenceView.vue'),
      meta: { layout: 'default' }
    },
    {
      path: '/skills',
      name: 'skills',
      component: () => import('@views/SkillsView.vue'),
      meta: { layout: 'default' }
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('@views/ContactView.vue'),
      meta: { layout: 'fullscreen' }
    }
  ]
})

export default router
