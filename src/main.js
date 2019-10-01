import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import routes from './routes.js';
import { ValidationProvider, ValidationObserver, extend } from 'vee-validate';
import { required, email } from 'vee-validate/dist/rules';
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false;
Vue.use(VueRouter);

//Rest API client
const axios = require('axios');
const restClient = axios.create({
  baseURL: process.env.VUE_APP_REST_API_URL,
  headers: {
    'content-type': 'application/json'
  }
});
Vue.prototype.$rest = restClient;

//Moment.js
var moment = require('moment');
Vue.prototype.$moment = moment;

//Vee-validate
extend('required', {
  ...required,
  message: 'The {_field_} field is required'
});
extend('email', email);
Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);

const router = new VueRouter({ routes });

new Vue({
  render: h => h(App),
  vuetify,
  router
}).$mount('#app');
