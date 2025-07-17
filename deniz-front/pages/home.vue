<template>
  <div class="flex flex-row min-h-screen">
    <div>
      <div class="border-2 border-black" v-for="quiz in allQuizzes" :key="quiz.id">
        <div>
          <NuxtLink :to="`/quiz-${quiz.id}`">{{ quiz.name }}</NuxtLink>
        </div>
        <div>{{ quiz.topic }}</div>
      </div>
    </div>
    <UserInfo />
  </div>
</template>

<script setup lang="ts">
const { data: allQuizzes } = await useFetch(`http://127.0.0.1:8000/api/`);


</script>
