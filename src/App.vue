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
@import url('https://fonts.googleapis.com/css?family=Dosis:500|Open+Sans:300&display=swap');

:root {
  --text-color: #2c3e50;
  --green1: #41B883;
  --dark-green: #35495E;
  --light-gray: #eaecef;
  --gray: #bbb;
  --error-red: #d73a49;
  --light-red: #ffeef0;
  --red: #ff2626;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--text-color);
}

body {
  margin: 0;
}

h1, h2, h3, p {
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

.rma-validation {
  font-size: 12px;
  color: var(--error-red);
  margin-bottom: 8px;
  margin-top: 2px;
  padding-left: 6px;
}

.rma-errorPanel {
  border: 1px solid var(--error-red);
  border-radius: 5px;
  background-color: var(--light-red);
  padding: 12px;
}
</style>
