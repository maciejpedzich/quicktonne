<script setup lang="ts">
import { ref } from 'vue';
import { useRoute } from 'vue-router';

import Button from 'primevue/button';
import ProgressSpinner from 'primevue/progressspinner';
import { useToast } from 'primevue/usetoast';

import { supabase } from '@/supabase';
import { logErrorInDevMode } from '@/utils/logErrorInDevMode';

const route = useRoute();
const toast = useToast();
const isLoading = ref(false);

const signIn = async (provider: 'github' | 'bitbucket') => {
  try {
    isLoading.value = true;

    const redirectPath = route.query.redirect as string;
    const redirectTo = `${window.location.origin}${redirectPath || '/'}`;

    redirectPath && localStorage.setItem('redirect', 'yes');
    const { error } = await supabase.auth.signIn({ provider }, { redirectTo });

    if (error) throw error;
  } catch (error) {
    logErrorInDevMode(error);

    localStorage.removeItem('redirect');
    toast.add({
      life: 3000,
      severity: 'error',
      summary: 'Error',
      detail: 'Failed to authenticate!'
    });
  } finally {
    isLoading.value = false;
  }
};
</script>

<template>
  <ProgressSpinner v-if="isLoading" />
  <template v-else>
    <div class="text-5xl text-center font-bold mb-3">Sign in via...</div>
    <div class="flex">
      <Button
        class="p-button-secondary mr-3"
        label="Github"
        @click="signIn('github')"
      />
      <Button label="Bitbucket" @click="signIn('bitbucket')" />
    </div>
  </template>
</template>
