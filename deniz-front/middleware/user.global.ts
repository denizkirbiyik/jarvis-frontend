export default defineNuxtRouteMiddleware((to) => {
    const userStore = useUserStore()
    if (!userStore.currentUsername && to.path !== '/') {
      return navigateTo('/')
    }
})