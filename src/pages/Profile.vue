<template>
  <div class="rma-layoutContent">
    <h1>My profile: {{status}}</h1>
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