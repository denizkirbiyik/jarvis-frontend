<template>
    <div>
        <button @click="confirmUser('sigmaboy')">sdrfhhrfhgr</button>
    </div>
</template>

<script setup lang="ts">

async function createUser(username: string) {
    useFetch(`http://127.0.0.1:8000/api/users`, { "method": "POST", "body": { "data": { "username": username, "completed_test_scores": {} } } })

}

async function confirmUser(username: string) {
    const allUsers = await useFetch(`http://127.0.0.1:8000/api/users`)
    console.log(allUsers)
    const exists = allUsers.some(user => user.username === username);
    console.log(exists)
}

</script>
