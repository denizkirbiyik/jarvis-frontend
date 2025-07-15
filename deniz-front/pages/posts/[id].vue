<template>
    <div>
        Test_ID
    </div>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: 'auth'
})

const route = useRoute()

// When accessing /posts/1, route.params.id will be 1
console.log(route.params.id)

definePageMeta({
  validate: async (route) => {
    // Check if the id is made up of digits
    return typeof route.params.id === 'string' && /^\d+$/.test(route.params.id)
  }
})

</script>

<style lang="scss" scoped>

</style>