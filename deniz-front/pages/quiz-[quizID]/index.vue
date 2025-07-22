<template>
    <div>
        <button class="cursor-pointer" @click="fetchQuestions">
            Start Quiz
        </button>
    </div>
</template>

<script setup lang="ts">
const quizStore = useQuizStore()
const route = useRoute();
const router = useRouter();

const { data } = await useFetch<Question[]>(`http://127.0.0.1:8000/api/questions/${route.params.quizID}`);

async function fetchQuestions() {
    if (!data.value) {
        console.error("No questions found.");
        return;
    }

    quizStore.questionList = data.value;
    router.push(`/quiz-${route.params.quizID}/0`);
}

</script>
