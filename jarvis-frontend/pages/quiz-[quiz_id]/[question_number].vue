<template>
    <div v-if="d">{{ d[route.params.question_number] }}</div>
    <div v-else>No quiz started, go to <NuxtLink :to="`/quiz-${route.params.quiz_id}`">this page</NuxtLink> to start the
        quiz.</div>
</template>

<script setup>
const route = useRoute()

const d = useState('questionList');
</script>
