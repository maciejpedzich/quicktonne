<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import Toast from 'primevue/toast';

import { supabase } from '@/supabase';
import { useAuth } from '@/composables/useAuth';

const route = useRoute();
const isPageWithCenteredText = computed(() =>
  ['Home', 'About', 'SignIn'].includes(route.name as string)
);

const { loadSession } = useAuth();

loadSession();

supabase.auth.onAuthStateChange(() => {
  loadSession();
  localStorage.setItem('redirect', 'guardReady');
});
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
  <Toast position="bottom-right" />
</template>

<style>
body {
  color: var(--text-color);
  font-family: var(--font-family);
}
</style>
