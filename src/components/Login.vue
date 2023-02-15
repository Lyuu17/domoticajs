<template>
  <div class="mb-6">
    <input type="email" id="email" @keydown.enter="login" v-model="email" placeholder="E-mail">
    <input type="password" id="password" class="mt-2" @keydown.enter="login" v-model="contraseña" placeholder="Contraseña">
  
    <button @click="login">Entrar</button>

    <div>
      {{ error }}
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { getAuth, signInWithEmailAndPassword } from '@firebase/auth';

const auth = getAuth();
const router = useRouter();

const email = ref(""), contraseña = ref(""), error = ref("");
const login = () => {
  signInWithEmailAndPassword(auth, email.value, contraseña.value)
    .then((userCredential) => {
      // const user = userCredential.user;
      router.push({ name: "home" });
      error.value = "";
    })
    .catch((e) => {
      const errorCode = e.code;
      const errorMessage = e.message;
      error.value = errorMessage;
    });
}

</script>

<style scoped>
label {
  @apply block mb-2 text-sm font-medium text-gray-900 dark:text-white;
}

input {
  @apply bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500;
}

button {
  @apply w-full mt-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800;
}
</style>