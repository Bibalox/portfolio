import './styles/font.scss'
import './styles/colors.scss'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')

// Manage the system color theme
const media = window.matchMedia('(prefers-color-scheme: dark)')

document
  .documentElement
  .setAttribute('data-theme', media.matches ? 'dark' : 'light')

media
  .addEventListener('change', e => {
    document
      .documentElement
      .setAttribute('data-theme', e.matches ? 'dark' : 'light')
  })
  
