import { watchEffect } from 'vue';
import { NavigationGuardNext, RouteLocationNormalized } from 'vue-router';

import { useAuth } from '@/composables/useAuth';

export function authGuard(
  from: RouteLocationNormalized,
  to: RouteLocationNormalized,
  next: NavigationGuardNext
): Promise<void> | void {
  const { isLoadingSession, session } = useAuth();

  const checkAuthStatus = () => {
    if (session.value) {
      return next();
    }

    return next({ name: 'SignIn' });
  };

  watchEffect(() => !isLoadingSession.value && checkAuthStatus())();
}
