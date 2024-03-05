import './styles/font.scss'
import './styles/colors.scss'

import { createApp } from 'vue'
import { switchTheme } from './utils/themes'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app
  .use(router)
  .mount('#app')


// Set the theme

const currentTheme: string = localStorage.getItem('jbbal-theme') ?? 'system'

if (currentTheme === 'system') {
  const media = window.matchMedia('(prefers-color-scheme: dark)')
  switchTheme(media.matches ? 'dark' : 'light')
  media.addEventListener('change', e => switchTheme(e.matches ? 'dark' : 'light'))
} else {
  switchTheme(currentTheme)
}


// Insert the icon board into the HTML file

fetch('icons.svg')
  .then(response => response.text())
  .then(svg => document.body.insertAdjacentHTML('afterbegin', svg))


// Insert the logo board into the HTML file

fetch('logo.svg')
  .then(response => response.text())
  .then(svg => document.body.insertAdjacentHTML('afterbegin', svg))