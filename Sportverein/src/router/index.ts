import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/Home.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
  ]
})

export default router