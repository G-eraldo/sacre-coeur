export default defineSitemapEventHandler(async () => {
  const runtimeConfig = useRuntimeConfig();
  const baseUrl =
    runtimeConfig.strapi.url || "https://backend.lafabriqueducode.fr";
  const token = process.env.STRAPI_TOKEN;

  const fetchOptions = {
    headers: token ? { Authorization: `Bearer ${token}` } : {},
  };

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

  return [...actualitesUrls, ...voyagesUrls];
});
