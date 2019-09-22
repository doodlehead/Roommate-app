<template>
  <div class="rma-layoutContent">
    <div v-if="!this.id">
      <h1>Create User</h1>
      <div style="display: flex; flex-direction: column; max-width: 300px;">
        <rma-input id="email" label="Email" v-model="email" @keyup.enter="createUser"/>
        <rma-input id="password" type="password" label="Password" v-model="password" @keyup.enter="createUser"/>
      </div>
      <rma-button @click="createUser">Create</rma-button>
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