<template>
  <div class="rma-layoutContent">
    <h1>My profile</h1>
  </div>
</template>
<script>
export default {
  name: 'Profile',
  components: {

  },
  data: function() {
    return {}
  },
  created: function() {
    this.$rest.get('/api/me').then(res => {
      console.log(res);
    }).catch(err => {
      console.log(err);
    });
  },
  methods: {

  }
}
</script>
<style lang="scss" scoped>

</style>