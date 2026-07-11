export default defineNuxtRouteMiddleware((to, from) => {
  if (to.path === '/l-ecole/horaires' || to.path === '/l-ecole/horaires/') {
    return navigateTo({ path: '/l-ecole', hash: '#horaires' }, { redirectCode: 301 })
  }
  if (to.path === '/college/horaires-et-structures' || to.path === '/college/horaires-et-structures/') {
    return navigateTo({ path: '/college', hash: '#horaires' }, { redirectCode: 301 })
  }
})
