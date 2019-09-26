<template>
  <div class="rma-layoutContent">
    <div v-if="!this.id">
      <h1>Create a new roommate group</h1>
      <rma-input label="Group Name" id="group_name" style="margin-bottom: 12px;" v-model="groupName" @keyup.enter="createGroup"/>
      <rma-button @click="createGroup">Create</rma-button>
    </div>
    <div v-else-if="this.groupData">
      <h1>{{groupData.group_name}}
        <svg class="rma-editIcon" style="margin-left: 10px;" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/></svg>
      </h1>

      <div class="rma-groupEdit">
        <div>
          <h2>Current Members</h2>
          <rma-button style="background: rgb(255, 38, 38); margin-bottom: 10px; font-weight: 600;"
                      :disabled="!checkedUsersRemove.length"
                      @click="removeUsersFromGroup">Remove selected roommates</rma-button>
          <rma-simple-table :rowData="members" style="margin-bottom: 20px;">
            <template v-slot:header>
              <th>Select</th>
              <th>User id</th>
              <th>Email</th>
              <th>First name</th>
              <th>Last name</th>
            </template>
            <template v-slot:default="slotProps">
              <td style="text-align: center;"><input type="checkbox" :value="slotProps.row.user_id" v-model="checkedUsersRemove"/></td>
              <td>{{slotProps.row.user_id}}</td>
              <td>{{slotProps.row.email}}</td>
              <td>{{slotProps.row.first_name}}</td>
              <td>{{slotProps.row.last_name}}</td>
            </template>
          </rma-simple-table>
        </div>

        <div>
          <h2>Add roommates</h2>
          <rma-button style="margin-bottom: 12px;" :disabled="!checkedUsersAdd.length" @click="addUsersToGroup">Add selected users</rma-button>
          <rma-simple-table :rowData="userList">
            <template v-slot:header>
              <th>Select</th>
              <th>ID</th>
              <th>Email</th>
              <th>First Name</th>
              <th>Last Name</th>
            </template>
            <template v-slot:default="slotProps">
              <td style="text-align: center;"><input type="checkbox" :value="slotProps.row.user_id" v-model="checkedUsersAdd"/></td>
              <td>{{slotProps.row.user_id}}</td>
              <td>{{slotProps.row.email}}</td>
              <td>{{slotProps.row.first_name}}</td>
              <td>{{slotProps.row.last_name}}</td>
            </template>
          </rma-simple-table>
        </div>
      </div>
    </div>
    <!-- Handle error case? -->
  </div>
</template>
<script>
import RmaInput from '@/components/Input';
import RmaButton from '@/components/Button';
import RmaSimpleTable from '@/components/SimpleTable';

export default {
  name: 'Group',
  components: {
    RmaInput,
    RmaButton,
    RmaSimpleTable
  },
  props: {
    id: String
  },
  data: function() {
    return {
      groupData: null,
      userList: [], //All users lol
      members: [],
      checkedUsersAdd: [],
      checkedUsersRemove: []
    }
  },
  created: function() {
    if(this.id) {
      this.$rest.get(`/api/group/${this.id}`)
        .then(res => {
          //console.log(res);
          this.groupData = res.data;
        }).catch(err => {
          console.log(err);
        });

      this.$rest.get(`/api/group/${this.id}/users`)
        .then(res => {
          this.members.push(...res.data);
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
      //Group admin is creator
      this.$rest.post('/api/group', {groupName: this.groupName})
        .then(res => {
          this.$router.push('/groups');
        }).catch(err => {
          console.log(err);
        });
    },
    addUsersToGroup: function() {
      this.$rest.post(`/api/group/${this.id}/addUsers`, {users: this.checkedUsersAdd})
        .then(res => {
          //refresh the data.
          this.members = res.data;
        }).catch(err => {
          console.log(err);
        });
    },
    removeUsersFromGroup: function() {
      this.checkedUsersRemove.forEach(userId => {
        this.$rest.delete(`/api/group/${this.id}/user`, { data: {userId: userId}})
          .then(res => {
            console.log(`Removed user ${userId}`);
            this.members = res.data;
          }).catch(err => {
            console.log(err);
          });
      });

    }
  }
}
</script>
<style lang="scss" scoped>
.rma-editIcon {
  cursor: pointer;
  opacity: 0.5;

  &:hover {
    opacity: 1;
  }
}

.rma-groupEdit {
  display: grid;
  grid-gap: 40px;
  grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
  & > div{
    border: 1px solid #b0b0b0;
    border-radius: 3px;
    padding: 12px;
  }

}
</style>