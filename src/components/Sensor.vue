<template>
  <div>
    <p class="flex flex-col justify-center h-[100%] text-2xl">
      {{ device.info }} {{ device.suffix }}
    </p>
  </div>
</template>

<script setup>
defineProps({
  device: Object
});
</script>