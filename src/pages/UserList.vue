<template>
  <div class="rma-layoutContent">
    <h1>User List page</h1>
    <div>
      <table>
        <thead></thead>
        <tbody>
          <tr v-for="user in users" :key="user.id">{{user}}</tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
const axios = require('axios');

const rest = axios.create({
  baseURL: 'http://localhost:3000',
  headers: {
    'content-type': 'application/json'
  }
});

export default {
  name: 'UserList',
  data: function() {
    return {
      users: []
    }
  },
  created: function() {
    rest.get('/users')
      .then(res => {
        this.users.push(...res.data);
      }).catch(err => {
        console.log(err);
      });
  }
}
</script>