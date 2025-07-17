import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserStore = defineStore('user', () => {
        const currentUsername = ref<string | null>(null)

        return { currentUsername }
    }, 
    {
        persist: true
    }
)