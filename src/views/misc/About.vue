<script setup lang="ts">
const currentYear = new Date().getFullYear();
</script>

<template>
  <div class="lg:text-6xl text-5xl font-bold mb-2">About</div>
  <div class="lg:text-2xl text-xl mb-2">Quicktonne v0.1.0</div>
  <div class="lg:text-2xl text-xl mb-2">
    &copy; 2020-{{ currentYear }} Maciej Pędzich, released under MIT License
  </div>
</template>
