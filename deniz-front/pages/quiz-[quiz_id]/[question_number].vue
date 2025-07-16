<template>
  <div v-if="questionData">
    <h1 class="question_text">{{ questionData[route.params.question_number].question_text }}</h1>
    <input v-model=answer type="number" size="10" class="border-black">
    <button @click="addAnswers">Submit Answer</button>
  </div>
  <div v-else>
    No Quiz Started, No Questions Found. Go to <NuxtLink :to="`/quiz-${route.params.quiz_id}`">this page</NuxtLink> to
    start the quiz.
  </div>
</template>

<script setup lang="ts">
const answer = ref(0)

const route = useRoute();
const router = useRouter();

const questionData = useState('questionList');
const answerList = useState('answerList')
async function addAnswers() {
  answerList.value.push(answer)
  router.push(`/quiz-${route.params.quiz_id}/$`)
}

</script>

<style lang="scss" scoped></style>