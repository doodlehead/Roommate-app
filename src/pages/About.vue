<template>
  <div class="rma-layoutContent">
    <h1>About</h1>
    <p>Hey there! This website is currently under construction. </p>
    <div class="rma-aboutGrid">
      <div>
        <h2>Incoming Features</h2>
        <div style="padding-left: 10px;">
          <h3>Server-side caching on API requests</h3>
          <h3>Authorization on API requests</h3>
          <h3>Create and share calendars with roommates</h3>
          <h3>Roommate Chatrooms</h3>
          <h3>Mobile support as a PWA</h3>
        </div>
      </div>

      <div>
        <h2>Design Diary</h2>
        <div>
          <h3>Authentication</h3>
          <p>User authentication is done with basic authentication (username and password). It's custom-implemented using JSON web tokens.</p>

          <h3></h3>
          <p></p>
        </div>
      </div>

      <div>
        <h2>Tech Stack</h2>
        <div>
          <h3>Front-end: Vue.js</h3>

          <h3>Server-side: Express.js</h3>

          <h3>Deployment:</h3>
          <p>The application's front-end and back-end are deployed as two separate instances on heroku. Vue CLI Service is being used
            to serve the front-end's static files.
          </p>
        </div>
      </div>
    </div>

  </div>
</template>
<script>
export default {
  name: 'About'
}
</script>
<style lang="scss" scoped>
.rma-aboutGrid {
  display: grid;
  grid-gap: 40px;
  grid-template-columns: 1fr 1fr 1fr;

  & > div {
    border: 1px solid #b0b0b0;
    border-radius: 3px;
    padding: 18px;

    & > h2 {
      border-bottom: 1px solid #b0b0b0;
      padding-bottom: 8px;
    }
  }
}
</style>