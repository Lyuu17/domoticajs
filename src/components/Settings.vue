<template>
  <Navbar/>

  <div class="mt-20 m-auto w-1/2">
    <label for="nombre">Nombre</label>
    <input type="text" name="nombre" v-model="nombre" placeholder="Nombre">
    
    <label for="email">E-mail</label>
    <input type="email" name="email" v-model="email" placeholder="E-mail">
  
    <label for="password">Contraseña</label>
    <input type="password" name="password" v-model="password" placeholder="Contraseña nueva">

    <button @click="save">Guardar</button>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { getCurrentUser } from "vuefire";

import Navbar from "@/components/Navbar.vue";
import { getAuth, updateEmail, updatePassword, updateProfile } from "@firebase/auth";

const nombre = ref(""), email = ref(""), password = ref("");

getCurrentUser().then((result) => {
  nombre.value = result.displayName;
  email.value = result.email;
});

const save = () => {
  if (password.value != "")
    updatePassword(getAuth().currentUser, password);
  updateProfile(getAuth().currentUser, { displayName: nombre.value });
  updateEmail(getAuth().currentUser, email.value);
}
</script>

<style scoped>
label {
  @apply block mb-2 text-sm font-medium text-gray-900 mt-2;
}

input {
  @apply mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5;
}

button {
  @apply w-full mt-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none;
}
</style>