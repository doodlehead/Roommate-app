<template>
  <div class="rma-layoutContent">
    <h1>{{ this.id ? "Edit User" : "Create User" }}</h1>
    <div style="display: flex; flex-direction: column; max-width: 300px;">
      <label for="email">Email</label>
      <input id="email"
            type="text"
            v-model="email"
            style="margin-bottom: 10px;"/>

      <label for="password">Password</label>
      <input id="password"
            type="password"
            v-model="password"
            style="margin-bottom: 10px"/>
    </div>
    <rma-button @click="createUser">Create</rma-button>
  </div>
</template>
<script>
import RmaButton from '@/components/Button';
const axios = require('axios');

const rest = axios.create({
  baseURL: 'http://localhost:3000',
  headers: {
    'content-type': 'application/json'
  }
});

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
      rest.get(`/user/${this.id}`).then(res => {
        console.log(res);
      }).catch(err => {
        console.log(err);
      });
    },
    createUser: function() {
      rest.post('/user', {
        email: this.email,
        password: this.password
      }).then(res => {
        console.log(res);
        console.log('Created user');
      });
    }
  }
}
</script>