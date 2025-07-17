export default defineNuxtRouteMiddleware((to, from) => {
    const quizStore = useQuizStore()
    if (quizStore.quizID && quizStore.questionID && to.path !== `/quiz-${quizStore.quizID}/${quizStore.questionID}`) {
        return navigateTo(`/quiz-${quizStore.quizID}/${quizStore.questionID}`)
    }
})