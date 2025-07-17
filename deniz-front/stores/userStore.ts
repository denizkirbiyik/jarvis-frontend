import { defineStore } from "pinia";
import { ref } from "vue";

export const useUserStore = defineStore(
  "user",
  () => {
    const currentUsername = ref<string>();

    return { currentUsername };
  },
  {
    persist: true,
  }
);
