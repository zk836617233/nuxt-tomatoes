// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  app: {
    head: {
      bodyAttrs: {
        class: "bg-[#F3F3F3]",
      },
    },
  },
  modules: ["@nuxt/image", "nuxt-icon", "nuxt-swiper"],
});
