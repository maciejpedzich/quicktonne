<script setup lang="ts">
import { ref } from 'vue';

import Button from 'primevue/button';
import ProgressSpinner from 'primevue/progressspinner';

import { supabase } from '@/supabase';

const isLoading = ref(false);

const signIn = async (provider: 'github' | 'bitbucket') => {
  try {
    isLoading.value = true;

    const { error } = await supabase.auth.signIn({
      provider
    });

    if (error) throw error;
  } catch (error) {
    console.error(error);
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
