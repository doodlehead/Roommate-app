<template>
  <div class="rma-layoutContent">
    <h1>Design Diary</h1>
    <h2>Implemented</h2>
    <h3>Authentication</h3>
    <p>User authentication is done with basic authentication (username and password). It's custom-implemented using JSON web tokens.</p>

    <h3>Front-end Design</h3>
    <p>All the front-end components on the website are done from scratch, no component library is used and everything is written in Vue.js and SCSS.</p>

    <h2>To do</h2>
    <div class="rma-todoGrid">
      <rma-card title="Authorization">Users should only have access to their own resources and nobody else's.</rma-card>
      <rma-card title="Transactions on REST endpoints">If any step within a transaction fails, the whole transaction should roll back.</rma-card>
      <rma-card title="Server-side validation">Use a server-side validation framework for Expressjs.</rma-card>
      <rma-card title="Front-end Unit Testing">Unit test my Vuejs components.</rma-card>
      <rma-card title="Back-end (API) Unit Tesing">Unit test my Expressjs REST endpoints.</rma-card>
      <rma-card title="Introduce structure into my CSS">
        Common CSS should be grouped into one file. Colors should be kept consistent using CSS variables.</rma-card>
      <rma-card title="Create a Roadmap">Plan out major milestone features and display a progress bar.</rma-card>
      <rma-card title="Overhaul the Design Diary">Add interactivity (+1 the entries in the Design Diary). Add more color.</rma-card>
    </div>
  </div>
</template>
<script>
import RmaCard from '@/components/Card';

export default {
  name: 'DesignDiary',
  components: {
    RmaCard
  }
}
</script>
<style lang="scss" scoped>
.rma-todoGrid {
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
}
</style>