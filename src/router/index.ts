import { authGuard } from '@/guards/auth';
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    name: 'Home',
    path: '/',
    component: () => import('../views/misc/Home.vue')
  },
  {
    name: 'About',
    path: '/about',
    component: () => import('../views/misc/About.vue'),
    beforeEnter: authGuard
  },
  {
    name: 'SignIn',
    path: '/sign-in',
    component: () => import('../views/auth/SignIn.vue')
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
