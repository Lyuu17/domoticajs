<template>
  <div class="container flex items-center justify-center m-auto h-screen">
    <p>Has cerrado sesión. Redireccionando ...</p>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { getAuth, signOut } from "@firebase/auth";

signOut(getAuth());

const router = useRouter();

setTimeout(() => router.push({ name: "home" }), 3000);
</script>

<style scoped>

</style>