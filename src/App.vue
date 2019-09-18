<template>
  <div id="app">
    <nav-header/>
    <router-view/>
  </div>
</template>

<script>
import NavHeader from '@/components/NavHeader';
export default {
  name: 'roommate-app',
  components: {
    NavHeader
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

.rma-layoutContent {
  margin: 20px 30px;
}

//Text input
.rma-textInput {
  padding: 4px 8px;
}
</style>
