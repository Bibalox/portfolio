import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@views/HomeView/HomeView.vue'
import ReferencesView from '@views/ReferencesView/ReferencesView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/references',
      name: 'references',
      component: ReferencesView
    }
  ]
})

export default router
