export default defineNuxtRouteMiddleware((to) => {
    const quizStore = useQuizStore()

    if (!quizStore.quizID || !quizStore.questionID) {
      const qid = parseInt(to.params.question_number as string)
      const zid = parseInt(to.params.quiz_id as string)
      if (!isNaN(zid) && !isNaN(qid)) {
        quizStore.quizID = zid
        quizStore.questionID = qid
      }
    }

    if (quizStore.quizID && quizStore.questionID) {
      const correctPath = `/quiz-${quizStore.quizID}/${quizStore.questionID}`
      if (to.path !== correctPath) {
        return navigateTo(correctPath)
      }
    }
  })