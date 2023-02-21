<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue';
</script>

<template>
  <header>
    <Navbar/>
  </header>

  <div class="mt-20">
    <RouterView />
  </div>
</template>

<style scoped>
</style>
