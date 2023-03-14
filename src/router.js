import { createRouter, createWebHistory } from 'vue-router';

import OverviewPage from './components/pages/OverviewPage.vue';

export default createRouter({ history: createWebHistory(), routes: [{ path: '/', component: OverviewPage }] });
