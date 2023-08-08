// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
    "@/assets/css/main.css",
    "@fortawesome/fontawesome-svg-core/styles.css",
  ],
  modules: ["@pinia/nuxt", "@nuxtjs/device"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  pinia: {
    autoImports: [
      // automatically imports `defineStore`
      "defineStore", // import { defineStore } from 'pinia'
      ["defineStore", "definePiniaStore"], // import { defineStore as definePiniaStore } from 'pinia'
    ],
  },
  runtimeConfig: {
    public: {
      API_URL: "http://192.168.0.101:80"
    },
  },
});
