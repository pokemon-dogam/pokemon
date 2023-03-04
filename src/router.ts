import { createRouter, createWebHistory } from 'vue-router';

import IndexPage from '@/pages/IndexPage.vue';

const routes = [
  {
    path: '/',
    component: IndexPage,
    meta: {
      title: 'Vite + Vue + TypeScript + Tailwind 스켈레톤',
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
