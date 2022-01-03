<script setup lang="ts">
import { computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';

import { supabase } from '@/supabase';
import { useAuth } from '@/composables/useAuth';

const route = useRoute();
const isPageWithCenteredText = computed(() =>
  ['Home', 'About', 'SignIn'].includes(route.name as string)
);

const { loadSession } = useAuth();

onMounted(loadSession);
supabase.auth.onAuthStateChange(loadSession);
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
