import { createRouter, createWebHistory } from 'vue-router';
import ManajemenAset from '../views/ManajemenAset.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ManajemenAset
    }
  ]
});


export default router;
