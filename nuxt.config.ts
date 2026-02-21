// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: [
    "@nuxt/eslint",
    "@nuxt/icon",
    "@nuxt/image",
    "shadcn-nuxt",
    "@nuxtjs/strapi",
  ],

  css: ["./app/assets/css/main.css"],
  vite: {
    plugins: [tailwindcss()],
  },
  shadcn: {
    /**
     * Prefix for all the imported component.
     * @default "Ui"
     */
    prefix: "",
    /**
     * Directory that the component lives in.
     * Will respect the Nuxt aliases.
     * @link https://nuxt.com/docs/api/nuxt-config#alias
     * @default "@/components/ui"
     */
    componentDir: "@/components/ui",
  },
  runtimeConfig: {
    strapi: {
      url: process.env.STRAPI_URL,
      prefix: "/api",
      admin: "/admin",
      version: "v5",
      cookie: {
        path: "/",
        maxAge: 14 * 24 * 60 * 60,
        secure: process.env.NODE_ENV === "production",
        sameSite: "Lax",
        httpOnly: true,
      },
      cookieName: "strapi_jwt",
    },
  },
});
