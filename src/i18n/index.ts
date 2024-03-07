import { en } from './en.ts'
import { fr } from './fr.ts'
import { createI18n } from 'vue-i18n'

const userLocale = navigator.language.substring(0, 2)

export const locales = {
  en: en,
  fr: fr
}

const messages = Object.assign(locales)

export const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: userLocale,
  fallbackLocale: 'fr',
  messages: messages
})
