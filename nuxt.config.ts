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

    ],
  },
})
