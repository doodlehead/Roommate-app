<template>
  <div id="app">
    <nav-header :update="counter"/>
    <router-view @logout="handleLogout" @login="handleLogin"/>
  </div>
</template>

<script>
import NavHeader from '@/components/NavHeader';

export default {
  name: 'roommate-app',
  components: {
    NavHeader
  },
  data: function() {
    return {
      counter: 0
    }
  },
  created: function() {
    //Check for the Auth token in localStorage
    if(localStorage.getItem('Authorization')) {
      //Configure the Rest Client to have the Authorization header
      this.$rest.defaults.headers.common['Authorization'] = localStorage.getItem('Authorization');
    }
  },
  methods: {
    handleLogout: function() {
      console.log('handle logout');
      this.counter += 1;
    },
    handleLogin: function() {
      console.log('handle login');
      this.counter += 1;
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

body {
  margin: 0;
}

h1, h2 {
  margin-top: 0;
}

.rma-layoutContent {
  margin: 20px 30px;
}

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
