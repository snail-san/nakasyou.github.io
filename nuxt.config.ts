import { $content } from "@nuxt/content"

async function getContents() => {
  const files = await $content({ deep: true }).only(["path"]).fetch();

  return files.map((file) => (file.path === "/index" ? "/" : file.path));
};

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxtjs/tailwindcss",
    '@nuxt/content',
    'nuxt-gtag',
    ['@funken-studio/sitemap-nuxt-3',{ generateOnBuild: true }],
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
  },
  sitemap: {
    routes() {
      return getRoutes();
    },
  },
})
