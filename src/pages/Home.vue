<template>
  <div class="rma-layoutContent">
    <h1 style="text-align: center; font-size: 44px; margin-top: 40px;">Welcome to my Roommate App!</h1>
    <div class="rma-homepageGrid">
      <div class="rma-homepageGrid__item">
        <h2>Explore</h2>
        <div>
          blah blah
        </div>
      </div>
      <div class="rma-homepageGrid__item">
        <h2>Features</h2>
      </div>
      <div class="rma-homepageGrid__item">
        <h2>Road Map</h2>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Homepage'
}
</script>
<style lang="scss" scoped>
.rma-homepageGrid {
  //border: 1px solid red;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 0 30px;
  //padding: 0 20px;

  & > &__item {
    border: 2px solid #eaecef;
    padding: 0 12px;
    border-radius: 2px;

    & > h2 {
      text-align: center;
    }
  }
}
</style>