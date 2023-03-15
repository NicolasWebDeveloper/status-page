import { createRouter, createWebHistory } from 'vue-router';

import OverviewPage from './components/pages/OverviewPage.vue';
import LoginPage from './components/pages/LoginPage.vue';

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: OverviewPage },
    { path: '/login', component: LoginPage },
  ],
});
