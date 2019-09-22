import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import routes from './routes.js';
import { ValidationProvider, extend } from 'vee-validate';
import { required, email } from 'vee-validate/dist/rules';

Vue.config.productionTip = false;
Vue.use(VueRouter);

//Rest API client
const axios = require('axios');
const restClient = axios.create({
  baseURL: process.env.REST_API_URL,
  headers: {
    'content-type': 'application/json'
  }
});
Vue.prototype.$rest = restClient;

//Vee-validate
extend('required', {
  ...required,
  message: 'The {_field_} field is required'
});
extend('email', email);
Vue.component('ValidationProvider', ValidationProvider);

const router = new VueRouter({ routes });

new Vue({
  render: h => h(App),
  router
}).$mount('#app');
