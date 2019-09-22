<template>
  <div class="rma-layoutContent" style="display: flex;">
    <div class="rma-registerPanel">
      <!-- TOOD: Maybe do a form submission thingy? -->
      <h1>Create Your Account</h1>
      <rma-input id="email" label="Email" v-model="email" @keyup.enter="createUser" style="margin-bottom: 14px;"/>
      <rma-input id="password" type="password" label="Password" v-model="password" @keyup.enter="createUser" style="margin-bottom: 14px;"/>
      <rma-input id="first_name" label="First Name" v-model="firstName" @keyup.enter="createUser" style="margin-bottom: 14px;"/>
      <rma-input id="last_name" label="Last Name" v-model="lastName" @keyup.enter="createUser"/>
      <rma-button @click="createUser" class="rma-button--large" style="margin-top: 18px;">Sign up</rma-button>
    </div>
  </div>
</template>
<script>
import RmaInput from '@/components/Input';
import RmaButton from '@/components/Button';

export default {
  name: 'Register',
  components: {
    RmaButton,
    RmaInput
  },
  data: function() {
    return {
      email: '',
      password: '',
      firstName: '',
      lastName: '',
      //errorMessages: []
    }
  },
  methods: {
    createUser: function() {
      this.$rest.post('/user', {
        email: this.email,
        password: this.password
      }).then(res => {
        //this.$router.push({ path:'/users', params: {  }});
        //TODO: authenticate?
        this.$router.push('/login');
      }).catch(err => {
        console.log(err);
        this.errorMessages.push(err.message);
      });
    }
  }
}
</script>
<style lang="scss" scoped>
.rma-registerPanel {
  margin-bottom: 8px;
  border: 1px solid #b0b0b0;
  border-radius: 3px;
  margin: 0 auto;
  padding: 20px 40px;
  min-width: 180px;
  flex-basis: 460px;
}
</style>