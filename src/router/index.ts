import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@views/HomeView/HomeView.vue'
import ReferencesView from '@views/ReferencesView/ReferencesView.vue'
import SkillsView from '@views/SkillsView/SkillsView.vue'
import ContactView from '@views/ContactView/ContactView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: { layout: 'default' }
    },
    {
      path: '/references',
      name: 'references',
      component: ReferencesView,
      meta: { layout: 'default' }
    },
    {
      path: '/skills',
      name: 'skills',
      component: SkillsView,
      meta: { layout: 'default' }
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView,
      meta: { layout: 'fullscreen' }
    }
  ]
})

export default router
