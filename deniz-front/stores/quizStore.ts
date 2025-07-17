import { defineStore } from "pinia";
import type { Question } from "@/utils/types";

export const useQuizStore = defineStore(
  "quiz",
  () => {
    const questionList = ref<Question[]>([]);
    const answerList = ref<number[]>([]);

    const quizID = ref<number | null>(null);
    const questionID = ref<number | null>(null);

    return {
      questionList,
      answerList,
      quizID,
      questionID,
    };
  },
  {
    persist: true,
  }
);
