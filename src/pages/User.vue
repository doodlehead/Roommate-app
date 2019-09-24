<template>
  <div class="rma-layoutContent">
    <div v-if="!this.id">
      <h1>Create User</h1>
      <div>
        <rma-input id="email" label="Email" v-model="email" @keyup.enter="createUser" style="margin-bottom: 14px"/>
        <rma-input id="password" type="password" label="Password" v-model="password" @keyup.enter="createUser" style="margin-bottom: 14px"/>
        <rma-input id="first_name" label="First Name" v-model="firstName" @keyup.enter="createUser" style="margin-bottom: 14px;"/>
        <rma-input id="last_name" label="Last Name" v-model="lastName" @keyup.enter="createUser"/>
      </div>
      <rma-button @click="createUser" style="margin-top: 14px">Create</rma-button>
    </div>
    <div v-else>
      <h1>Edit User</h1>
    </div>
  </div>
</template>
<script>
import RmaButton from '@/components/Button';
import RmaInput from '@/components/Input';

export default {
  name: 'User',
  components: {
    RmaButton,
    RmaInput
  },
  props: {
    id: String
  },
  data: function() {
    return {
      email: '',
      password: '',
      firstName: '',
      lastName: ''
    }
  },
  created: function() {
    if(this.id) {
      this.loadUser();
    }
  },
  methods: {
    loadUser: function() {
      this.$rest.get(`/user/${this.id}`).then(res => {
        console.log(res);
      }).catch(err => {
        console.log(err);
      });
    },
    createUser: function() {
      //TODO: just put it in a user JSON
      this.$rest.post('/user', {
        email: this.email,
        password: this.password,
        firstName: this.firstName,
        lastName: this.lastName
      }).then(res => {
        this.$router.push({ path:'/users', params: {  }});
      });
    }
  }
}
</script>
<style lang="scss" scoped>

</style>