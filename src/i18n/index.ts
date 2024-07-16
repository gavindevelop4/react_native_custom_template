import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import enUS from './languages/en-us.json'

// Declare all the language source json
export const resources = {
  'en-US': {
    translation: enUS,
  },
} as const

const language = i18n.use(initReactI18next).init({
  fallbackLng: 'en-US',
  debug: true,
  resources,
  compatibilityJSON: 'v3',
})

export default language
