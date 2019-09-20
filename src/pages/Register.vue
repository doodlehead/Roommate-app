<template>
  <div class="rma-layoutContent">
    <h1>Register</h1>
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
    <rma-button @click="createUser">Sign up</rma-button>
  </div>
</template>
<script>
import RmaButton from '@/components/Button';

export default {
  name: 'Register',
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
    createUser: function() {

    }
  }
}
</script>
<style lang="scss" scoped>

</style>