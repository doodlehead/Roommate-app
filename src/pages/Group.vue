<template>
  <div class="rma-layoutContent">
    <h1>Create a new roommate group</h1>
    <rma-input label="Group Name" id="group_name" style="margin-bottom: 12px;" v-model="groupName" @keyup.enter="createGroup"/>
    <rma-button @create="createGroup">Create</rma-button>
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
  data: function() {
    return {
      groupName: ''
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
    }
  }
}
</script>
<style lang="scss" scoped>

</style>