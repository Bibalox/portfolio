import './styles/font.scss'
import './styles/colors.scss'

import { createApp } from 'vue'
import { getUserTheme, setTheme } from './utils/themes'

import App from './App.vue'
import router from './router'
import { i18n } from './i18n'

const app = createApp(App)

app
  .use(router)
  .use(i18n)
  .mount('#app')


// Set the theme

setTheme(getUserTheme())


// Insert the icon board into the HTML file

fetch('icon-board.svg')
  .then(response => response.text())
  .then(svg => document.body.insertAdjacentHTML('afterbegin', svg))


// Insert the logo board into the HTML file

fetch('logo.svg')
  .then(response => response.text())
  .then(svg => document.body.insertAdjacentHTML('afterbegin', svg))