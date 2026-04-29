// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  app: {
    head: {
      htmlAttrs: {
        lang: "fr",
      },
    },
  },
  modules: [
    "@nuxt/eslint",
    "@nuxt/icon",
    "@nuxt/image",
    "shadcn-nuxt",
    "@nuxtjs/strapi",
    "@nuxtjs/seo",
    "@nuxt/fonts",
  ],

  image: {
    cloudinary: {
      baseURL: "https://res.cloudinary.com/dlnbsf2ed/image/upload/",
    },
    quality: 80,
    format: ["webp", "avif"],
  },

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
  css: ["~/assets/css/main.css"],
  vite: {
    optimizeDeps: {
      include: [
        "@vue/devtools-core",
        "@vue/devtools-kit",
        "lucide-vue-next",
        "vue-sonner",
        "clsx",
        "tailwind-merge",
        "@vueuse/core",
        "embla-carousel-autoplay",
        "class-variance-authority",
        "reka-ui",
        "embla-carousel-vue",
      ],
    },
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
  fonts: {
    families: [
      {
        name: "Merriweather",
        provider: "google",
        weights: [400, 700],
        global: true,
      },
    ],
  },
});
