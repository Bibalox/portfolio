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
      components: {
        Contained: HomeView
      }
    },
    {
      path: '/references',
      name: 'references',
      components: {
        Contained: ReferencesView
      }
    },
    {
      path: '/skills',
      name: 'skills',
      components: {
        Contained: SkillsView
      }
    },
    {
      path: '/contact',
      name: 'contact',
      components: {
        FullScreen: ContactView
      }
    }
  ]
})

export default router
