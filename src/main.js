import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import routes from './routes.js';

Vue.config.productionTip = false;
Vue.use(VueRouter);

//Rest API client
const axios = require('axios');
const restClient = axios.create({
  baseURL: 'http://localhost:3000',
  headers: {
    'content-type': 'application/json'
  }
});
Vue.prototype.$rest = restClient;

const router = new VueRouter({ routes });

new Vue({
  render: h => h(App),
  router
}).$mount('#app');
