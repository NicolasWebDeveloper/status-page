import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import BasePage from './components/base/BasePage.vue';
import BaseCard from './components/base/BaseCard.vue';
import BaseStatus from './components/base/BaseStatus.vue';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faNoteSticky, faGauge, faDatabase, faBan, faChartPie, faCode } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faNoteSticky);
library.add(faGauge);
library.add(faDatabase);
library.add(faBan);
library.add(faChartPie);
library.add(faCode);

const app = createApp(App);

app.use(router);
app.component('font-awesome-icon', FontAwesomeIcon);
app.component('base-page', BasePage);
app.component('base-card', BaseCard);
app.component('base-status', BaseStatus);
app.mount('#app');
