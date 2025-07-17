<template>
  <div v-if="currentQuestion">
    <h1 class="question_text">
      {{ currentQuestion.question_text }}
    </h1>
    <input v-model="answer" type="number" size="10" class="border-black">
    <button @click="addAnswers">Submit Answer</button>
  </div>
  <div v-else-if="questionData && questionData.length === 0">
    No Quiz Started, No Questions Found. Go to
    <NuxtLink :to="`/quiz-${route.params.quiz_id}`">this page</NuxtLink> to
    start the quiz.
  </div>
  <div v-else>Question not found or invalid question number</div>
</template>

<script setup lang="ts">
const quizStore = useQuizStore()
const userStore = useUserStore()

const route = useRoute();
const router = useRouter();


onMounted(() => {
  if (quizStore.questionID) {
    router.push(`/quiz-${quizStore.quizID}/${quizStore.questionID}`)
  }

  quizStore.quizID = parseInt(route.params.quiz_id as string)
  quizStore.questionID = parseInt(route.params.question_id as string)
})


const answer = ref(0);
const questionNumber = computed(() =>
  parseInt(route.params.question_number as string)
);
const nextQuestion = computed(() => questionNumber.value + 1);

const questionData = quizStore.questionList

const currentQuestion = computed(() => {
  if (!questionData || !Array.isArray(questionData)) return null;
  return questionData[questionNumber.value];
});

watch(
  () => route.params.question_number,
  (newVal) => {
    const num = parseInt(newVal as string);
    if (isNaN(num) || num < 0 || num >= questionData.length) {
      router.push(`/quiz-${route.params.quiz_id}/0`);
    }
  },
  { immediate: true }
);

async function addAnswers() {
  quizStore.answerList.push(answer.value);

  if (nextQuestion.value >= questionData.length) {
    await checkAnswers();
    quizStore.answerList = []
    router.push(`/home`);
  } else {
    router.push(`/quiz-${route.params.quiz_id}/${nextQuestion.value}`);
  }
}

async function checkAnswers() {
  try {
    const res = await $fetch(
      `http://127.0.0.1:8000/api/check/${route.params.quiz_id}`,
      {
        method: "POST",
        body: {
          user: userStore.currentUsername,
          data: quizStore.answerList,
        },
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.error("Error checking answers:", error);
  }
}
</script>
