<template>
  <nav class="rma-navbar">
    <div class="rma-navbar__logoText">
      Roommate App
    </div>
    <router-link class="rma-navbar__blockLink"
        v-for="link in navLinks"
        :key="link.name"
        :to="link.to">
      {{link.name}}
    </router-link>
  </nav>
</template>
<script>
export default {
  name: 'NavHeader',
  data: function() {
    return {
      navLinks: [
        {name: 'Home', to: '/'},
        {name: 'User List', to: '/users'},
        {name: 'Create New User', to: '/user'},
        {name: 'About', to: '/about'}
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.rma-navbar {
  //background-color: #41B883;
  display: flex;
  border-bottom: 1px solid #eaecef;
  font-size: 18px;
  font-weight: 600;
  user-select: none;
  white-space: nowrap;

  & > &__blockLink {
    color: #2c3e50;
    text-decoration: none;
    margin: auto 12px;
    //border-right: 1px solid #2c3e50;
    border-bottom: 2px solid transparent;

    &:hover {
      //color: white;
      border-bottom: 2px solid #41B883;
    }
  }

  & > &__logoText {
    font-size: 24px;
    padding: 8px;
    margin: 8px 60px 8px 8px;
    //color: #41B883;
    //color: #35495E;

    background: linear-gradient(to right, #41B883 0%, #35495E 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
}
</style>