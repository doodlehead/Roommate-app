<template>
  <div class="rma-layoutContent">
    <h1 style="margin-bottom: 10px;">About</h1>
    <p style="margin-bottom: 10px;">Hey there! This website is currently under construction. </p>
    <div class="rma-aboutGrid">
      <div>
        <h2>Incoming Features</h2>
        <div style="padding-left: 10px;">
          <h3>Create and share calendars with roommates</h3>
          <h3>Roommate Chatrooms</h3>
          <h3>Mobile support as a PWA</h3>
        </div>
      </div>

      <div style="display: flex; flex-direction: column;">
        <h2>Design Diary</h2>
        <div>
          Learn more about how I designed this web application as well as about the features in development.
        </div>
        <rma-button style="margin: auto; font-size: 30px; padding: 16px 20px; border-radius: 5px;"
                    @click="$router.push('/about/design-diary')">View Design Diary</rma-button>
      </div>

      <div>
        <h2 style="margin-bottom: 10px;">Technology Stack</h2>
        <div>
          <div style="display: flex; border-bottom: 1px solid #b0b0b0; padding-bottom: 8px; margin-bottom: 8px;">
            <h3 style="margin: auto; white-space: nowrap;">Front-end:</h3>
            <div class="rma-vuejsLogo" style="flex-grow: 1; margin-left: 12px;">
              <img src="https://vuejs.org/images/logo.png" style="width: 40px; height: 40px; margin-right: 10px;">
              <div>Vue.js</div>
            </div>
          </div>

          <div style="display: flex; border-bottom: 1px solid #b0b0b0; padding-bottom: 8px; margin-bottom: 12px;">
            <h3 style="margin: auto; white-space: nowrap;">Server-side:</h3>
            <div class="rma-expressjsLogo" style="flex-grow: 1; margin-left: 14px;">
              Express
            </div>
          </div>

          <div style="display: flex; border-bottom: 1px solid #b0b0b0; padding-bottom: 8px; margin-bottom: 12px;">
            <h3 style="margin: auto;">Deployment:</h3>
            <div class="rma-herokuLogo" style="flex-grow: 1; margin-left: 14px;">
              <svg style="fill: #9E7CC1; margin-right: 12px;" width="27" height="30" viewBox="0 0 27 30" xmlns="http://www.w3.org/2000/svg"><title>heroku-logo</title><path d="M3 0C1.13 0 0 1.11 0 2.903v24.194C0 28.883 1.13 30 3 30h21c1.863 0 3-1.11 3-2.903V2.903C26.994 1.11 25.863 0 24 0H3zm21.042 2c.508.006.958.448.958.929V27.07c0 .487-.45.929-.958.929H2.958C2.45 28 2 27.558 2 27.071V2.93c0-.488.45-.93.958-.93h21.084zM20 25h-2.781v-8.506c0-.774-.237-1.048-.468-1.208-1.396-.959-5.414-.042-7.834.916L7 17.012 7.006 5h2.816v7.917a20.99 20.99 0 0 1 1.882-.482c2.988-.643 5.184-.47 6.616.505.787.536 1.68 1.59 1.68 3.554V25zm-6-15h3.293A16.109 16.109 0 0 0 20 5h-3.287c-.49 1.188-1.385 3.188-2.713 5zM7 25v-7l3 3.5L7 25z" fill="%239E7CC1" fill-rule="evenodd"/></svg>
              <svg style="fill: #9E7CC1; margin: auto 0;" width="62" height="11" viewBox="0 0 62 11" xmlns="http://www.w3.org/2000/svg"><title>HEROKU</title><path d="M0 9.802h2.6V5.915h3.198v3.887h2.6V.182h-2.6v3.575H2.6V.182H0v9.62zm11.374 0h7.085V7.709h-4.485V5.928h3.042V3.9h-3.042V2.34h4.264V.182h-6.864v9.62zm9.567 0h2.548V6.461h.715l1.859 3.341h2.756l-2.041-3.679c1.26-.429 1.898-1.3 1.898-2.808 0-2.314-1.508-3.133-3.978-3.133H20.94v9.62zm2.548-5.317V2.288h1.118c1.066 0 1.534.286 1.534 1.092s-.468 1.105-1.534 1.105h-1.118zm12.257 5.499c2.314 0 4.72-1.469 4.72-4.992C40.465 1.469 38.06 0 35.745 0c-2.327 0-4.732 1.469-4.732 4.992 0 3.523 2.405 4.992 4.732 4.992zm0-2.08c-1.365 0-2.132-1.144-2.132-2.912s.767-2.847 2.132-2.847c1.352 0 2.12 1.079 2.12 2.847s-.768 2.912-2.12 2.912zm7.24 1.898h2.6v-2.99l.741-.858 2.275 3.848h2.938l-3.523-5.824L51.254.182h-3.016l-2.652 3.484V.182h-2.6v9.62zm14.624.143c2.808 0 4.03-1.456 4.03-4.004V.182h-2.548v5.746c0 1.326-.416 1.924-1.456 1.924s-1.469-.598-1.469-1.924V.182h-2.6v5.759c0 2.548 1.235 4.004 4.043 4.004z" fill="%238460AA" fill-rule="evenodd"></path></svg>
            </div>
          </div>

          <p>The application's front-end and back-end are deployed as two separate instances on heroku. Vue CLI Service is being used
            to serve the front-end's static files.
          </p>
        </div>
      </div>
    </div>

  </div>
</template>
<script>
import RmaButton from '@/components/Button';
export default {
  name: 'About',
  components: {
    RmaButton
  }
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
      margin-bottom: 8px;
      padding-bottom: 8px;
    }

    & p {
      font-size: 14px;
    }

    & h3 {
      margin-bottom: 6px;
    }
  }
}

.rma-vuejsLogo {
  font-size: 1.5em;
  line-height: 40px;
  color: #273849;
  font-family: "Dosis", "Source Sans Pro", "Helvetica Neue", Arial, sans-serif;
  font-weight: 500;
  display: flex;
}

.rma-expressjsLogo {
  display: block;
  font: 25px helvetica neue,open sans,sans-serif;
  font-weight: 100;
  color: #444;
}

.rma-herokuLogo {
  display: flex;
  opacity: 1;
  margin-right: 7px;
  color: #9E7CC1;
  padding-left: 0px;
  font-size: 18px;
}
</style>