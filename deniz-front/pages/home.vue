<template>
  <div class="flex flex-row min-h-screen">
    <div>
      <div v-for="quiz in allQuizzes" :key="quiz.id" class="border-2 border-black">
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
const { data: allQuizzes } = await useFetch<Quiz[]>(`http://127.0.0.1:8000/api/`);


</script>
