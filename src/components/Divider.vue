<template>
  <div class="relative flex py-2 items-center">
    <div class="flex-grow border-t border-gray-400"></div>
    <span class="flex-shrink mx-2 text-gray-400 text-sm">
      {{ text }}
    </span>
    <div class="flex-grow border-t border-gray-400"></div>
  </div>
</template>

<script setup>
defineProps({
  text: String
});
</script>