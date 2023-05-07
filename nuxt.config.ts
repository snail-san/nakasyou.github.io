// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxtjs/tailwindcss",
    '@nuxt/content',
    'nuxt-gtag',
  ],
  buildModules: ["@nuxtjs/tailwindcss"],
  css: ["@/assets/styles/tailwind.css"],
  content: {
    
  },
  head: {
    script: [
      { src: "/main.js" },
    ],
  },
  gtag: {
    id: "G-4MMWC0RS80",
  }
})
