import { NavigationFailure, RouteLocationNormalized } from 'vue-router';

export function clearHashGuard(
  from: RouteLocationNormalized,
  to: RouteLocationNormalized,
  failure: void | NavigationFailure | undefined
) {
  if (!['Home', 'SignIn'].includes(from.name as string)) {
    history.pushState(
      {},
      document.title,
      window.location.pathname + window.location.search
    );
  }
}
