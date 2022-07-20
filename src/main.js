import { createApp, markRaw } from 'vue'
import App from './App.vue'
import './index.css'

/** Create application instance */
const app = createApp(App);

import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'
app.component('Datepicker', Datepicker);


/** PrimeVue - Import */

import 'primevue/resources/themes/bootstrap4-light-blue/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';
// import '@/assets/base.css';

import createPrimeVue from '@/exports/exp.primevue.js';
createPrimeVue(app);

import mitt from 'mitt';
import VueGridLayout from 'vue3-grid-layout';
app.component("GridLayout", VueGridLayout.GridLayout)
app.component("GridItem", VueGridLayout.GridItem)
app.use(mitt);


/** TimePicker */
import VueTimepicker from 'vue3-timepicker'
import 'vue3-timepicker/dist/VueTimepicker.css';
app.component('VueTimepicker', VueTimepicker);

/** Mount the app */
app.mount('#app');
