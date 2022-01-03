import { computed, reactive } from 'vue';

import { Session } from '@supabase/supabase-js';
import { supabase } from '@/supabase';

export interface UseAuthState {
  isLoadingSession: boolean;
  session: Session | null;
}

const state = reactive<UseAuthState>({
  isLoadingSession: false,
  session: null
});

export function useAuth() {
  const isLoadingSession = computed<boolean>(() => state.isLoadingSession);
  const session = computed<Session | null>(() => state.session);

  const loadSession = () => {
    state.isLoadingSession = true;
    state.session = supabase.auth.session();
    state.isLoadingSession = false;
  };
  const clearSession = () => (state.session = null);

  return { isLoadingSession, session, loadSession, clearSession };
}
