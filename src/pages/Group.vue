<template>
  <div class="rma-layoutContent">
    <div v-if="!this.id">
      <h1>Create a new roommate group</h1>
      <rma-input label="Group Name" id="group_name" style="margin-bottom: 12px;" v-model="groupName" @keyup.enter="createGroup"/>
      <rma-button @click="createGroup">Create</rma-button>
    </div>
    <div v-else>
      <h1>Edit group</h1>
      <rma-input label="Group Name" id="group_name" style="margin-bottom: 12px;" v-model="groupName" @keyup.enter="updateGroup"/>
      <rma-button @click="updateGroup">Update</rma-button>

      <h2 style="margin-top: 24px;">Add roommates</h2>
      <rma-button style="margin-bottom: 12px;">Add</rma-button>
      <table class="rma-table">
        <thead>
          <tr>
            <th>Select</th>
            <th>ID</th>
            <th>Email</th>
            <th>First Name</th>
            <th>Last Name</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in userList"
              :key="user.user_id">
            <input type="checkbox"/>
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
import RmaInput from '@/components/Input';
import RmaButton from '@/components/Button';

export default {
  name: 'Group',
  components: {
    RmaInput,
    RmaButton
  },
  props: {
    id: String
  },
  data: function() {
    return {
      groupName: '',
      userList: []
    }
  },
  created: function() {
    if(this.id) {
      this.$rest.get(`/api/group/${this.id}`)
        .then(res => {
          //console.log(res);
          this.groupName = res.data.group_name;
        }).catch(err => {
          console.log(err);
        });

      //TODO: Redo this part later
      //Get a list of all Users
      this.$rest.get('/api/users')
        .then(res => {
          this.userList.push(...res.data);
        }).catch(err => {
          console.log(err);
        });
    }
  },
  methods: {
    createGroup: function() {
      //TODO: get the user's id
      this.$rest.post('/api/group', {groupName: this.groupName, groupAdmin: 0})
        .then(res => {
          this.$router.push('/groups');
        }).catch(err => {
          console.log(err);
        });
    },
    updateGroup: function() {

    }
  }
}
</script>
<style lang="scss" scoped>

</style>