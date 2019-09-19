<template>
  <div class="rma-layoutContent">
    <h1>User Login</h1>
    <div style="display: flex; flex-direction: column; max-width: 300px;">
      <label for="email" style="margin-bottom: 4px;">Email</label>
      <input id="email"
            type="text"
            v-model="email"
            @keyup.enter="login"
            class="rma-textInput"
            style="margin-bottom: 12px;"/>

      <label for="password" style="margin-bottom: 4px;">Password</label>
      <input id="password"
            type="password"
            v-model="password"
            @keyup.enter="login"
            class="rma-textInput"
            style="margin-bottom: 16px"/>
    </div>
    <rma-button @click="login">Login</rma-button>
  </div>
</template>
<script>
import RmaButton from '@/components/Button';

export default {
  name: 'Login',
  components: {
    RmaButton
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
          //TODO: configure the Rest Client to have the Authorization header
          //TODO: redirect to User Landing Page?
          this.$router.push('/');
        }).catch(err => {
          console.log(err);
        });
    }
  }
}
</script>
<style lang="scss" scoped>

</style>