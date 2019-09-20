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
    <!-- TODO: add a carrot? -->
<!--     <div class="rma-navbar__blockLink rma-navbar__dropdown"
          v-if="authenticated">
      Groups
      <div class="rma-navbar__dropdownContent">
        <router-link to="/users" class="rma-navbar__dropdownLink">Create a new Group</router-link>
        <router-link to="/user" class="rma-navbar__dropdownLink">My Groups</router-link>
      </div>
    </div> -->
    <div class="rma-navbar__blockLink rma-navbar__dropdown"
          v-if="authenticated">
      Admin
      <!-- TODO: refine this. Maybe refactor into components... -->
      <div class="rma-navbar__dropdownContent">
        <router-link to="/users" class="rma-navbar__dropdownLink">User List</router-link>
        <router-link to="/user" class="rma-navbar__dropdownLink">Create User</router-link>
      </div>
    </div>

    <!-- User Profile Dropdown -->
    <div class="rma-navbar__blockLink rma-navbar__dropdown"
          style="padding-top: 5px; margin-left: auto; margin-right: 30px;"
          v-if="authenticated">
      <img src="https://capenetworks.com/static/images/testimonials/user-icon.svg" class="rma-profileIcon"/>
      <div class="rma-navbar__dropdownContent rma-navbar__dropdownContent--left" style="margin-top: 2px;">
        <router-link to="/profile" class="rma-navbar__dropdownLink">My Profile</router-link>
        <a @click="logout" class="rma-navbar__dropdownLink">Logout</a>
      </div>
    </div>
    <div v-else
        style="display: flex; margin-left: auto; margin-right: 20px;">
      <router-link class="rma-navbar__blockLink rma-navbar__loginButton"
                    to="/login">
        Sign in
      </router-link>
      <router-link class="rma-navbar__blockLink rma-navbar__registerButton"
                    style=""
                    to="/register">
        Register
      </router-link>
    </div>


  </nav>
</template>
<script>
export default {
  name: 'NavHeader',
  props: {
    update: Number
  },
  created: function() {
    this.authenticated = !!localStorage.getItem('Authorization');
  },
  data: function() {
    return {
      navLinks: [
        {name: 'Home', to: '/'},
        {name: 'My Groups', to: '/groups'},
        {name: 'About', to: '/about'}
      ],
      authenticated: false
    }
  },
  computed: {
  },
  methods: {
    logout: function() {
      localStorage.removeItem('Authorization');
      this.$router.push('/');
      this.authenticated = false;
    }
  },
  watch: {
    update: function() {
      console.log('Watch triggered');
      this.authenticated = !!localStorage.getItem('Authorization');
      this.$forceUpdate();
    }
  }
}
</script>
<style lang="scss" scoped>
.rma-profileIcon {
  height: 46px;
  width: 46px;
  cursor: pointer;
}

.rma-navbar {
  //background-color: #41B883;
  display: flex;
  border-bottom: 1px solid #eaecef;
  font-size: 18px;
  font-weight: 600;
  user-select: none;
  white-space: nowrap;

  & &__blockLink {
    color: #2c3e50;
    text-decoration: none;
    margin: auto 12px;
    //border-right: 1px solid #2c3e50;
    border-bottom: 2px solid transparent;

    &:hover {
      border-bottom: 2px solid #41B883;
    }
  }

  &__dropdown:hover &__dropdownContent {
    display: block;
  }

  & &__dropdownContent {
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;

    //Drop down to the left
    &--left {
      //TODO: arbitrary value. Don't do this
      right: 18px;
    }
  }

  & &__dropdownLink {
    float: none;
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    text-align: left;
    cursor: pointer;
    font-weight: 400;
    font-size: 16px;

    &:hover {
      background-color: #ddd;
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

  & &__loginButton {
    //border: 2px solid #41B883;
    //background-color: #41B883;
    //color: white;
    border-right: 1px solid #b0b0b0;
    padding: 8px 12px;
    border: 1px solid #b0b0b0;
    border-radius: 3px;
  }

  & &__registerButton {
    background-color: #41B883;
    color: white;
    border-right: 1px solid #b0b0b0;
    border-radius: 3px;
    padding: 8px 12px;
    margin-left: 0;

    &:hover {
      opacity: 0.85;
    }
  }
}
</style>