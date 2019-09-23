<template>
  <div class="rma-layoutContent">
    <h1>User Login</h1>
      <rma-input id="email" label="Email" v-model="email" @keyup.enter="login" style="margin-bottom: 10px"/>
      <rma-input id="password" type="password" label="Password" v-model="password" @keyup.enter="login" style="margin-bottom: 10px"/>
    <rma-button @click="login">Login</rma-button>
    <p>Don't have an account? <router-link to="/register">Sign up</router-link></p>
  </div>
</template>
<script>
import RmaInput from '@/components/Input';
import RmaButton from '@/components/Button';

export default {
  name: 'Login',
  components: {
    RmaButton,
    RmaInput
  },
  data: function() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login: function() {
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
          console.log(err);
        });
    }
  }
}
</script>
<style lang="scss" scoped>

</style>