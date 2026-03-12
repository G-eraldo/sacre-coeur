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
    "@nuxtjs/seo",
  ],

  site: {
    url: "https://demo-sacre-coeur.vercel.app",
    name: "Institution du Sacré-Cœur à Breteuil",
    description:
      "Site officiel de l'Institution du Sacré-Cœur à Breteuil : École, Collège (SEGPA) et Internat.",
    indexable: false,
    defaultLocale: "fr",
  },
  sitemap: {
    sources: ["/api/__sitemap__/urls"],
  },
  schemaOrg: {
    identity: {
      type: "Organization",
      name: "Institution du Sacré-Cœur à Breteuil",
      url: "https://demo-sacre-coeur.vercel.app",
      logo: "/logo4.png",
    },
  },
  ogImage: {
    defaults: {
      component: "Default",
    },
  },
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
      url: process.env.STRAPI_URL || "http://localhost:1337",
      prefix: "/api",
      admin: "/admin",
      version: "v5",
    },
  },
  debug: true,
});
