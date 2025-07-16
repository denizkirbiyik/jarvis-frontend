<template>
    <div>
        <button class="cursor-pointer" @click="fetchQuestions">
            Start Quiz
        </button>
    </div>
</template>

<script setup>
const route = useRoute();
const router = useRouter();

const { data } = await useFetch(`http://127.0.0.1:8000/api/questions/${route.params.quiz_id}`);
const questionData = useState('questionList');
useState('answerList', () => [0])

async function fetchQuestions() {
    questionData.value = data.value;
    router.push(`/quiz-${route.params.quiz_id}/0`);
};

</script>

<style lang="scss" scoped></style>