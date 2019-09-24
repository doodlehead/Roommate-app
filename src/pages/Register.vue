<template>
  <div class="rma-layoutContent" style="display: flex; flex-direction: column;">
    <div v-if="errorMessages && errorMessages.length" class="rma-errorPanel" style="margin-bottom: 20px;">{{errorMessages}}</div>
    <ValidationObserver v-slot="{ invalid }" class="rma-registerPanel">
      <!-- TOOD: Maybe do a form submission thingy? -->
      <h1>Create Your Account</h1>
      <rma-input-validated id="email"
                  label="Email"
                  name="email"
                  rules="required|email"
                  v-model="email"
                  @keyup.enter="createUser"/>
      <rma-input-validated id="password"
                  type="password"
                  label="Password"
                  name="password"
                  rules="required"
                  v-model="password"
                  @keyup.enter="createUser"
                  style="margin-bottom: 14px;"/>
      <rma-input-validated id="first_name"
                  label="First Name"
                  name="first name"
                  rules="required"
                  v-model="firstName"
                  @keyup.enter="createUser"
                  style="margin-bottom: 14px;"/>
      <rma-input-validated id="last_name"
                  label="Last Name"
                  name="last name"
                  rules="required"
                  v-model="lastName"
                  @keyup.enter="createUser"/>
      <rma-button @click="createUser"
                  class="rma-button--large"
                  style="margin-top: 10px;"
                  :disabled="invalid">Sign up</rma-button>
    </ValidationObserver>
  </div>
</template>
<script>
import RmaInput from '@/components/Input';
import RmaInputValidated from '@/components/InputValidated';
import RmaButton from '@/components/Button';

export default {
  name: 'Register',
  components: {
    RmaButton,
    RmaInput,
    RmaInputValidated
  },
  data: function() {
    return {
      email: '',
      password: '',
      firstName: '',
      lastName: '',
      errorMessages: []
    }
  },
  methods: {
    createUser: function() {
      this.errorMessages = [];
      //Run the validation by...

      this.$rest.post('/user', {
        email: this.email,
        password: this.password,
        firstName: this.firstName,
        lastName: this.lastName
      }).then(res => {
        //this.$router.push({ path:'/users', params: {  }});
        //TODO: authenticate?
        this.$router.push('/login');
      }).catch(err => {
        this.errorMessages.push(err.response.data || err.message || err);
      });
    }
  }
}
</script>
<style lang="scss" scoped>
.rma-registerPanel {
  margin-bottom: 8px;
  border: 1px solid #b0b0b0;
  border-radius: 5px;
  margin: 0 auto;
  padding: 40px 80px;
  min-width: 180px;
  //flex-basis: 300px;
}

.rma-errorPanel {
  border: 1px solid #d73a49;
  border-radius: 5px;
  background-color: #ffeef0;

  padding: 12px;
}
</style>