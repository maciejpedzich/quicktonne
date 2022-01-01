<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const isPageWithCenteredText = computed(() =>
  ['Home', 'About'].includes(route.name as string)
);
</script>

<template>
  <div
    :class="[
      'w-full',
      'h-full',
      isPageWithCenteredText
        ? 'flex flex-column align-items-center justify-content-center'
        : ''
    ]"
  >
    <router-view></router-view>
  </div>
</template>

<style>
body {
  color: var(--text-color);
  font-family: var(--font-family);
}
</style>
