// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // devtools: { enabled: true },

  css: [
    '/assets/css/tailwind.css',
    '/assets/css/style.css'
  ],

  modules: [
    "@nuxtjs/tailwindcss",
    'nuxt-swiper',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
     '@vue-email/nuxt'
  ],
})