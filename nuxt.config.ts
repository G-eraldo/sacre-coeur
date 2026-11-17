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
    url: "https://www.sacrecoeur-breteuil.fr",
    name: "Institution du Sacré Cœur à Breteuil",
    description:
      "Site officiel de l'Institution du Sacré Cœur à Breteuil : École, Collège (SEGPA) et Internat.",
    indexable: true,
    defaultLocale: "fr",
  },
  sitemap: {
    sources: ["/api/__sitemap__/urls"],
  },
  routeRules: {
    "/**": {
      headers: {
        "Content-Security-Policy": `default-src 'self'; base-uri 'self'; object-src 'none'; frame-ancestors 'none'; form-action 'self'; img-src 'self' data: blob: https://res.cloudinary.com https://*.cloudinary.com; font-src 'self' data:; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; script-src 'self' ${process.env.NODE_ENV === "production" ? "" : "'unsafe-inline' "}; script-src-attr 'unsafe-hashes' 'sha256-bwK6T5wZVTANitXbrTsel7kl/PyCjCd/Dq5Qoz3imjM='; connect-src 'self' https://backend.sacrecoeur-breteuil.fr https://data.education.gouv.fr https://calendrier.api.gouv.fr; upgrade-insecure-requests`,
        "Strict-Transport-Security": "max-age=31536000; includeSubDomains",
        "X-Content-Type-Options": "nosniff",
        "X-Frame-Options": "DENY",
        "Referrer-Policy": "strict-origin-when-cross-origin",
        "Permissions-Policy": "camera=(), microphone=(), geolocation=(), payment=()",
      },
    },
    "/sitemap.xml": { prerender: false },
    "/10-frontpage/134-visite-virtuelle": {
      redirect: { to: "/a-propos", statusCode: 301 },
    },
    "/11-l-etablissement": { redirect: { to: "/a-propos", statusCode: 301 } },
    "/l-etablissement/le-mot-du-directeur": {
      redirect: { to: "/#mot-du-directeur", statusCode: 301 },
    },
    "/13-college": { redirect: { to: "/college", statusCode: 301 } },
    "/12-l-ecole": { redirect: { to: "/l-ecole", statusCode: 301 } },
    "/l-ecole/horaires": {
      redirect: { to: "/l-ecole#horaires", statusCode: 301 },
    },
    "/15-internat": { redirect: { to: "/internat", statusCode: 301 } },
    "/college/horaires-et-structures": {
      redirect: { to: "/college#horaires", statusCode: 301 },
    },
    "/inscriptions/10-frontpage/133-inscription-en-ligne-rentree-2022": {
      redirect: { to: "/pre-inscription", statusCode: 301 },
    },
  },
  schemaOrg: {
    identity: {
      type: "Organization",
      name: "Institution du Sacré Cœur à Breteuil",
      url: "https://www.sacrecoeur-breteuil.fr",
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
