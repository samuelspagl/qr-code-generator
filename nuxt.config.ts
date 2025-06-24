import Aura from '@primeuix/themes/aura';
import tailwindcss from '@tailwindcss/vite';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  site: { 
    url: 'https://qr.spagl-media.de', 
    name: 'QR-Code Generator' 
  },
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  ssr: false,
  modules: ['@primevue/nuxt-module', '@nuxtjs/i18n', '@nuxtjs/seo'],
  primevue: {
    options: {
      theme: {
        preset: Aura
      }
    }
  },
  vite: {
    plugins: [tailwindcss()]
  },
  css: ['@/assets/css/main.css'],
  i18n:{
    defaultLocale: 'de',
    locales:[
      { code: 'en', name: 'English', file: 'en.json' },
      { code: 'de', name: 'Deutsch', file: 'de.json' },
    ]
  }
})