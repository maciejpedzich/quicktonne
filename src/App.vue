<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';

import ProgressSpinner from 'primevue/progressspinner';
import Toast from 'primevue/toast';

import { supabase } from '@/supabase';
import { useAuth } from '@/composables/useAuth';

const route = useRoute();
const isPageWithCenteredText = computed(() =>
  ['Home', 'About', 'SignIn'].includes(route.name as string)
);

const { isLoadingSession, loadSession } = useAuth();

loadSession();

supabase.auth.onAuthStateChange((event) => {
  if (event === 'SIGNED_IN') {
    localStorage.setItem('redirect', 'guardReady');
    loadSession();
  }
});
</script>

<template>
  <ProgressSpinner v-if="isLoadingSession" />
  <div
    v-show="!isLoadingSession"
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
