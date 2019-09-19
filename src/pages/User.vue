<template>
  <div class="rma-layoutContent">
    <h1>{{ this.id ? "Edit User" : "Create User" }}</h1>
    <div style="display: flex; flex-direction: column; max-width: 300px;">
      <label for="email" style="margin-bottom: 4px;">Email</label>
      <input id="email"
            type="text"
            v-model="email"
            @keyup.enter="createUser"
            class="rma-textInput"
            style="margin-bottom: 12px;"/>

      <label for="password" style="margin-bottom: 4px;">Password</label>
      <input id="password"
            type="password"
            v-model="password"
            @keyup.enter="createUser"
            class="rma-textInput"
            style="margin-bottom: 16px"/>
    </div>
    <rma-button @click="createUser">Create</rma-button>
  </div>
</template>
<script>
import RmaButton from '@/components/Button';

export default {
  name: 'User',
  components: {
    RmaButton
  },
  props: {
    id: String
  },
  data: function() {
    return {
      email: '',
      password: ''
    }
  },
  created: function() {
    //console.log(`User id is ${this.id}`);
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
      this.$rest.post('/user', {
        email: this.email,
        password: this.password
      }).then(res => {
        this.$router.push({ path:'/users', params: {  }});
      });
    }
  }
}
</script>
<style lang="scss" scoped>

</style>