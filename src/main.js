import Vue from 'vue';
import App from './App.vue';
import axios from 'axios';

import store from './store';
import router from './routes';

if (Vue.config.devtools) {
  axios.defaults.baseURL = 'localhoost:5000';
  console.log('\ndevelopment\n\n');
} else {
  axios.defaults.baseURL = 'https://cis410-fa20-hermanson-api.azurewebsites.net';
  console.log('\nproduction\n\n');
}

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});
