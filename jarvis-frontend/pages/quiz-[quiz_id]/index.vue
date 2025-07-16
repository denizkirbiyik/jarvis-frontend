<template>
    <div>
        <button class="bg-red-500" @click="skib">START QUIZ</button>
        <p>{{ d }}</p>
    </div>
</template>

<script setup>
const route = useRoute()
const router = useRouter()

const d = useState('questionList');
const { data } = await useFetch(`http://127.0.0.1:8000/api/questions/${route.params.quiz_id}`);
function skib() {
    d.value = data.value;
    router.push(`/quiz-${route.params.quiz_id}/0`)
}
</script>