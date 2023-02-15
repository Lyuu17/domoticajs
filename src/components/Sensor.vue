<template>
  <div>
    <div>{{ nombre }}</div>
    <input type="number" v-model="entrada">
    <button @click="enviar">Enviar</button>
  </div>
</template>

<script setup>
const nombre = ref("");
const entrada = ref(0);

const enviar = () => {
  
}
</script>

<style scoped>

</style>