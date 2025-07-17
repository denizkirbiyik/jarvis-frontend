export default defineNuxtRouteMiddleware((to, from) => {
    const userStore = useUserStore()
    if (!userStore.currentUsername && to.path !== '/') {
      return navigateTo('/')
    }
})