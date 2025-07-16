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
const route = useRoute();
const router = useRouter();

const answer = ref(0)
const nextQuestion = parseInt(route.params.question_number) + 1


const questionData = useState('questionList');
const answerList = useState('answerList')

async function addAnswers() {
  answerList.value.push(answer)

  if (nextQuestion + 1 == questionData.value.length) {
    // check answers
    checkAnswers()
    router.push(`/home`)
  } else {
    router.push(`/quiz-${route.params.quiz_id}/${nextQuestion}`)
  }
}

async function checkAnswers() {
  useFetch(`http://127.0.0.1:8000/api/check/${route.params.quiz_id}`, { "body": { "user": "skibdop", "data": answerList } })
}
</script>

<style lang="scss" scoped></style>