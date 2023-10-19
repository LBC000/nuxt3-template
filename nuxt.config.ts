// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  runtimeConfig: {
    // public中的密钥也在客户端公开
    public: {
      apiBase: "/api",
    },
  },

  modules: ["@nuxtjs/i18n"],
  i18n: {
    vueI18n: "./i18n.config.ts",
    locales: ["en", "fr"], // used in URL path prefix
    defaultLocale: "en", // default locale of your project for Nuxt pages and routings
  },
});
