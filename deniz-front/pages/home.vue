<template>
  <div>{{ allQuizzes }}</div>
</template>

<script setup>
const { data: allQuizzes } = await useFetch(`http://127.0.0.1:8000/api/`);
</script>
