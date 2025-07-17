import { defineStore } from 'pinia'


export const useQuizStore = defineStore('quiz', () => {

        const questionList = ref<string[]>([])
        const answerList = ref<number[]>([])

        const quizID = ref<number | null>(null)
        const questionID = ref<number | null>(null)

        return {
        questionList,
        answerList,
        quizID,
        questionID,
        }
    },
    {
        persist: true
    }
)
  