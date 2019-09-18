<template>
  <div class="rma-layoutContent">
    <h1>User List page</h1>
    <div>
      <table class="rma-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user.id">
            <td>{{user.id}}</td>
            <td>{{user.email}}</td>
          </tr>
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
<style lang="scss" scoped>
table.rma-table {
  border-collapse: collapse;
  & tr, & td, & th {
    border: 1px solid #ddd;
  }

  & td, & th {
    text-align: left;
    padding: 8px 12px;
  }

  tbody > tr:nth-child(odd) {
    background-color: #f2f2f2;
  }
}
</style>