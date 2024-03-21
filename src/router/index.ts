import { createRouter, createWebHashHistory } from 'vue-router'

type ScrollPositionNormalized = {
  behavior?: ScrollOptions['behavior']
  left: number
  top: number
}

declare module 'vue-router' {
  interface RouteMeta {
    scrollPos?: ScrollPositionNormalized
  }
}

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    if (to.name === from.name) {
      to.meta?.scrollPos && (to.meta.scrollPos.top = 0)
      return { left: 0, top: 0 }
    }
    const scrollpos = savedPosition || to.meta?.scrollPos || { left: 0, top: 0 }
    return new Promise(resolve => resolve(scrollpos))
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
      meta: { layout: 'default', scrollPos: {
        top: 0,
        left: 0
      } }
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

router.beforeEach((to, from, next) => {
  from.meta?.scrollPos && (from.meta.scrollPos.top = document.documentElement.scrollTop)
  return next()
})

export default router
