<template>
  <div>
    <input v-model="userTyped" type="text">
    <button @click="confirmUser(userTyped)">Sign In</button>
  </div>
</template>

<script setup lang="ts">
const userStore = useUserStore()
const userTyped = ref("");

const router = useRouter();

async function createUser(username: string) {
  const { data, error } = await useFetch(`http://127.0.0.1:8000/api/users`, {
    method: "POST",
    body: { username: username, completed_test_scores: {} },
  });

  if (error.value) {
    console.error("Error creating user:", error.value);
    return false;
  }
  return data.value;
}

async function confirmUser(username: string) {
  const { data: exists, error } = await useFetch(
    `http://127.0.0.1:8000/api/users/check/${username}`
  );
  if (error.value) {
    console.error("Error fetching users:", error.value);
    return false;
  }

  if (exists.value) {
    userStore.currentUsername = username
    router.push("/home");
    return true;
  }

  const created = await createUser(username);
  if (created) {
    userStore.currentUsername = username
    router.push("/home");
    return false;
  }

  console.error("Failed to create user");
  return false;
}
</script>
