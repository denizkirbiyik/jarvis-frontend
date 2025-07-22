<template>
    <div class="border-2 border-red-500">{{ userInfo }}</div>
</template>

<script setup lang="ts">
const userStore = useUserStore()

const { data: userInfo } = await useFetch(`http://127.0.0.1:8000/api/users/${userStore.currentUsername}`);
</script>