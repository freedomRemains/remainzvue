import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Top from '../views/Top.vue'; // TOP画面をインポート

const routes = [
  {
    path: '/',
    name: 'Hoge',
    component: Home,
  },
  {
    path: '/top', // TOP画面へのURLパス
    name: 'Top',
    component: Top,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
