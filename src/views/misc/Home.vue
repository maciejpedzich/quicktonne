<script setup lang="ts">
import { useRouter } from 'vue-router';
import Button from 'primevue/button';

import { supabase } from '@/supabase';
import { useAuth } from '@/composables/useAuth';

const { clearSession } = useAuth();
const logOut = async () => {
  clearSession();

  await supabase.auth.signOut();
  await router.push('/sign-in');
};

const router = useRouter();
const goToSignInPage = () => router.push('/sign-in');
</script>

<template>
  <div id="title" class="lg:text-6xl text-5xl text-center font-bold mb-2">
    Quicktonne
  </div>
  <div class="lg:text-2xl text-xl text-center font-light mb-2">
    Find a pair programming buddy and code with each other in real time
  </div>
  <div class="flex flex-wrap justify-content-center lg:text-lg text-md mt-2">
    <Button label="Join now" @click="goToSignInPage" />
    <Button class="p-button-danger ml-3" label="Log out" @click="logOut" />
  </div>
</template>
