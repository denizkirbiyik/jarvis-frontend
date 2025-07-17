<template>
    <div class="border-2 border-red-500">gbhjterjte</div>
</template>

<script setup lang="ts">
const { data: userInfo } = await useFetch(`http://127.0.0.1:8000/api/user/id/2`);
</script>