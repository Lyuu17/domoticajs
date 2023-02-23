<template>
  <nav class="bg-white px-2 sm:px-4 py-2.5 fixed w-full z-20 top-0 left-0 border-b border-gray-200">
    <div class="container flex flex-wrap items-center justify-between mx-auto">
      <RouterLink :to="{ name: 'home' }" class="flex items-center">
        <span class="self-center text-xl font-semibold whitespace-nowrap">domoticajs</span>
      </RouterLink>

      <div class="relative">
        <button @click="expanded = !expanded" 
          class="relative z-10 p-2 ml-2 text-gray-700 bg-white border border-transparent rounded-md border-gray-700 focus:border-blue-500 focus:ring-opacity-40 focus:ring-blue-300 focus:ring focus:outline-none">
          <MenuIcon/>
        </button>

        <div v-if="expanded"
          class="absolute right-0 z-20 w-48 py-2 mt-2 origin-top-right bg-white rounded-md shadow-xl">
            <div>
              <span class="block px-4 pt-2 text-sm text-gray-900">
                {{ username }}
              </span>
              <span class="block px-4 pb-2 text-sm font-medium text-gray-500 truncate">
                {{ email }}
              </span>
            </div>
            <ul class="py-2 text-sm text-gray-700">
              <li>
                <RouterLink :to="{ name: 'home' }" class="block px-4 py-2 hover:bg-gray-100">Dashboard</RouterLink>
              </li>
              <li>
                <RouterLink :to="{ name: 'settings' }" class="block px-4 py-2 hover:bg-gray-100">Ajustes</RouterLink>
              </li>
              <li>
                <RouterLink :to="{ name: 'logout' }" class="block px-4 py-2 hover:bg-gray-100">Cerrar Sesión</RouterLink>
              </li>
            </ul>
          </div>
        </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from "vue";
import { getCurrentUser } from "vuefire";

import MenuIcon from "@/components/icons/MenuIcon.vue";

const expanded = ref(false);

const username = ref(""), email = ref("");
getCurrentUser().then((result) => {
  username.value = result.displayName ? result.displayName : "Sin nombre";
  email.value = result.email;
});
</script>

<style scoped>

</style>