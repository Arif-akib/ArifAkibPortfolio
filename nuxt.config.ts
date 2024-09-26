// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // devtools: { enabled: true },

  app: {
    head: {
      title: 'Arif Akib',
      link: [
        { rel: "icon", type: "image/png", href: "/AA.png" }
      ]
    },
  },

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