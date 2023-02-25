<script setup>
import { RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue';
</script>

<template>
  <header>
    <Navbar/>
  </header>

  <div>
    <RouterView />
  </div>
</template>

<style scoped>
</style>
