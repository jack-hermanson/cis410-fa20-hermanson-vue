import Vue from 'vue';
import App from './App.vue';
import axios from 'axios';

import store from './store';
import router from './routes';


axios.defaults.baseURL = 'https://cis410-fa20-hermanson-api.azurewebsites.net';


new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});
