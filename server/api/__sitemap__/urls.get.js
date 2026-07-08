export default defineSitemapEventHandler(async () => {
  const runtimeConfig = useRuntimeConfig();
  const baseUrl =
    runtimeConfig.strapi.url || "https://backend.sacrecoeur-breteuil.fr";
  const token = process.env.STRAPI_TOKEN;

  const fetchOptions = {
    headers: token ? { Authorization: `Bearer ${token}` } : {},
  };

  // Pages statiques
  const staticUrls = [
    {
      loc: "/",
      changefreq: "daily",
      priority: 1.0,
      lastmod: new Date().toISOString(),
    },
    {
      loc: "/l-ecole",
      changefreq: "monthly",
      priority: 0.8,
      lastmod: "2025-01-01",
    },
    {
      loc: "/college",
      changefreq: "monthly",
      priority: 0.8,
      lastmod: "2025-01-01",
    },
    {
      loc: "/segpa",
      changefreq: "monthly",
      priority: 0.8,
      lastmod: "2025-01-01",
    },
    {
      loc: "/internat",
      changefreq: "monthly",
      priority: 0.8,
      lastmod: "2025-01-01",
    },
    {
      loc: "/pastorale",
      changefreq: "monthly",
      priority: 0.8,
      lastmod: "2025-01-01",
    },
    {
      loc: "/a-propos",
      changefreq: "monthly",
      priority: 0.7,
      lastmod: "2025-01-01",
    },
    {
      loc: "/contact",
      changefreq: "monthly",
      priority: 0.6,
      lastmod: "2025-01-01",
    },
    {
      loc: "/pre-inscription",
      changefreq: "monthly",
      priority: 0.9,
      lastmod: "2025-01-01",
    },
    {
      loc: "/actualites",
      changefreq: "daily",
      priority: 0.9,
      lastmod: new Date().toISOString(),
    },
    {
      loc: "/voyages",
      changefreq: "daily",
      priority: 0.9,
      lastmod: new Date().toISOString(),
    },
    {
      loc: "/calendrier",
      changefreq: "monthly",
      priority: 0.7,
      lastmod: "2025-01-01",
    },
    {
      loc: "/videos",
      changefreq: "monthly",
      priority: 0.7,
      lastmod: "2025-01-01",
    },
    {
      loc: "/documents",
      changefreq: "monthly",
      priority: 0.7,
      lastmod: "2025-01-01",
    },
    {
      loc: "/mentions-legales",
      changefreq: "yearly",
      priority: 0.3,
      lastmod: "2025-01-01",
    },
  ];

  // Fetch Actualités
  const actualites = await $fetch(
    `${baseUrl}/api/actualites?fields[0]=slug&fields[1]=updatedAt&pagination[pageSize]=100`,
    fetchOptions,
  ).catch(() => ({ data: [] }));

  // Fetch Voyages
  const voyages = await $fetch(
    `${baseUrl}/api/voyages?fields[0]=slug&fields[1]=updatedAt&pagination[pageSize]=100`,
    fetchOptions,
  ).catch(() => ({ data: [] }));

  const actualitesUrls = actualites.data.map((item) => ({
    loc: `/actualites/${item.slug}`,
    lastmod: item.updatedAt,
    changefreq: "weekly",
    priority: 0.8,
  }));

  const voyagesUrls = voyages.data.map((item) => ({
    loc: `/voyages/${item.slug}`,
    lastmod: item.updatedAt,
    changefreq: "weekly",
    priority: 0.8,
  }));

  return [...staticUrls, ...actualitesUrls, ...voyagesUrls];
});
