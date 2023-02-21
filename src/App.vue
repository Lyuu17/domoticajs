<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue';
</script>

<template>
  <header>
    <Navbar/>
  </header>

  <RouterView class="mt-20" />
</template>

<style scoped>
</style>
