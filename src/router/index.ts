import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  scrollBehavior() {
    return { top: 0 }
  },
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
    },
    {
      path: '/:pathMatch(.*)*',
      component: () => import('@views/NotFoundView.vue'),
      meta: { layout: 'fullscreen' }
    }
  ]
})

export default router
