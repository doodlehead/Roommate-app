<template>
  <div class="rma-layoutContent">
    <div v-if="errorMessages && errorMessages.length"
        class="rma-errorPanel"
        style="margin-bottom: 20px;">{{errorMessages}}</div>
    <h1>User Login</h1>
    <rma-input-validated id="email"
              label="Email"
              name="email"
              rules="required|email"
              v-model="email"
              @keyup.enter="login"
              style="margin-bottom: 10px"/>
    <rma-input-validated id="password"
              type="password"
              label="Password"
              name="password"
              rules="required"
              v-model="password"
              @keyup.enter="login"
              style="margin-bottom: 14px"/>
    <rma-button @click="login" style="margin-bottom: 12px;">Login</rma-button>
    <p>Don't have an account? <router-link to="/register">Sign up</router-link></p>
  </div>
</template>
<script>
import RmaInput from '@/components/Input';
import RmaInputValidated from '@/components/InputValidated';
import RmaButton from '@/components/Button';

export default {
  name: 'Login',
  components: {
    RmaButton,
    RmaInput,
    RmaInputValidated
  },
  data: function() {
    return {
      email: '',
      password: '',
      errorMessages: []
    }
  },
  methods: {
    login: function() {
      this.errorMessages = []; //Clear errors

      this.$rest.post('/authenticate', { 'email': this.email, 'password': this.password })
        .then(res => {
          //Store the auth token
          localStorage.setItem('Authorization', res.data.authorization);
          //configure the Rest Client to have the Authorization header
          this.$rest.defaults.headers.common['Authorization'] = res.data.authorization;

          //TODO: redirect to User Landing Page. Where should this be?
          this.$router.push('/');
          //Force the navbar to update...
          this.$emit('login');
        }).catch(err => {
          this.errorMessages.push(err.response.data || err.message || err);
        });
    }
  }
}
</script>
<style lang="scss" scoped>

</style>