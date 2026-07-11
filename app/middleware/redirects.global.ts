export default defineNuxtRouteMiddleware((to, from) => {
  if (to.path === '/l-ecole/horaires' || to.path === '/l-ecole/horaires/') {
    return navigateTo('/l-ecole#horaires', { redirectCode: 301, external: true })
  }
  if (to.path === '/college/horaires-et-structures' || to.path === '/college/horaires-et-structures/') {
    return navigateTo('/college#horaires', { redirectCode: 301, external: true })
  }
})
