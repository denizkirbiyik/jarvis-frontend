<template>
    <div>
        <div class="sticky top-0 flex flex-row justify-evenly w-[100vw]">
            <h1>WELCOME TO JARVIS LI QUIZZES</h1>
            <NuxtLink v-if="userStore.currentUsername !== null" class="cursor-pointer" to="/home">Go To Quiz List
            </NuxtLink>
            <button v-if="userStore.currentUsername !== null" class="cursor-pointer" @click="signOut">Sign Out</button>
            <NuxtLink v-else to="/">Sign In</NuxtLink>
        </div>
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
