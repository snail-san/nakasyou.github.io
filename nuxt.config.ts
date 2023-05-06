// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxtjs/tailwindcss",
    '@nuxt/content',
  ],
  buildModules: ["@nuxtjs/tailwindcss"],
  css: ["@/assets/styles/tailwind.css"],
  content: {
    
  },
  head: {
    script: [
      { src: 'https://www.googletagmanager.com/gtag/js?id=G-X7S9B5WF1H', async: true},
      { src: '/script/google-analytics.js' },
    ],
  },
})
