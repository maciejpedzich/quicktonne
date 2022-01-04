import { NavigationGuardNext, RouteLocationNormalized } from 'vue-router';

import { useAuth } from '@/composables/useAuth';
import { watchEffect } from 'vue';

export function authGuard(
  from: RouteLocationNormalized,
  to: RouteLocationNormalized,
  next: NavigationGuardNext
): Promise<void> | void {
  const { isLoadingSession, session } = useAuth();

  const checkAuthStatus = () => {
    localStorage.removeItem('redirect');

    if (session.value) return next();

    return next({
      name: 'SignIn',
      query: {
        redirect: from.fullPath
      }
    });
  };

  watchEffect(() => {
    const afterRedirectCheckStatus = localStorage.getItem('redirect');
    const loadingFinished = !isLoadingSession.value;

    if (
      loadingFinished &&
      (!afterRedirectCheckStatus || afterRedirectCheckStatus === 'guardReady')
    ) {
      checkAuthStatus();
    }
  });
}
