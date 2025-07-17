<template>
    <div class="fixed">
        <h1 class="bg-gray-50">"Header"</h1>
        <button class="cursor-pointer" @click="signOut">Sign Out</button>
        <slot />
    </div>
</template>

<script setup lang="ts">
const userStore = useUserStore()
const router = useRouter()
function signOut() {
    userStore.currentUsername = null
    router.push('/')
}
</script>

<style lang="css" scoped></style>