<template>
  <div class="rma-layoutContent">
    <h1>My profile: {{status}}</h1>
    <div v-if="user">
      First name: {{user.first_name}}<br>
      Last name: {{user.last_name}}<br>
      email: {{user.email}}
    </div>
  </div>
</template>
<script>
export default {
  name: 'Profile',
  components: {

  },
  data: function() {
    return {
      status: '',
      user: null
    }
  },
  created: function() {
    this.$rest.get('/api/me').then(res => {
      this.status = 'Authenticated';
      this.user = res.data;
    }).catch(err => {
      this.status = 'BAD'
    });
  },
  methods: {

  }
}
</script>
<style lang="scss" scoped>

</style>