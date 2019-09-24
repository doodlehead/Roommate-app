<template>
  <div class="rma-layoutContent">
    <h1>User List page</h1>
    <div>
      <table class="rma-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Email</th>
            <th>First name</th>
            <th>Last name</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users"
              :key="user.user_id"
              @dblclick="$router.push(`/user/${user.user_id}`)">
            <td>{{user.user_id}}</td>
            <td>{{user.email}}</td>
            <td>{{user.first_name}}</td>
            <td>{{user.last_name}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  name: 'UserList',
  data: function() {
    return {
      users: []
    }
  },
  created: function() {
    this.$rest.get('/api/users')
      .then(res => {
        this.users.push(...res.data);
      }).catch(err => {
        //TODO: handle error
        console.log(err);
      });
  }
}
</script>
<style lang="scss" scoped>
</style>