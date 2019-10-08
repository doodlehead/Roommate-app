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

//Globally register base components
const requireComponent = require.context(
  './components',
  false, // Whether or not to look in subfolders
  /[A-Z]\w+\.(vue|js)$/ // The regular expression used to match base component filenames
);

requireComponent.keys().forEach(fileName => {
  // Get component config
  const componentConfig = requireComponent(fileName)

  // Get PascalCase name of component
  const componentName =
      'Rma'.concat(fileName
        .split('/')
        .pop()
        .replace(/\.\w+$/, ''));

  // Register component globally
  Vue.component(
    componentName,
    // Look for the component options on `.default`, which will
    // exist if the component was exported with `export default`,
    // otherwise fall back to module's root.
    componentConfig.default || componentConfig
  )
});


var scrollBehavior = function(to, from, savedPosition) {
  if (to.hash) {
    return {
      selector: to.hash
    }
  } else {
    return {
      x: 0,
      y: 0
    }
  }
};

const router = new VueRouter({
  routes,
  scrollBehavior,
  mode: 'history',
});

new Vue({
  render: h => h(App),
  vuetify,
  router
}).$mount('#app');
