<template>
  <div class="rma-layoutContent">
    <h1 style="text-align: center; font-size: 44px; margin-top: 40px;">An application for roommates.</h1>
    <div class="rma-homepageGrid">
      <div class="rma-homepageGrid__item">
        <h2>Feature 1</h2>
        <div>

        </div>
      </div>
      <div class="rma-homepageGrid__item">
        <h2>Feature 2</h2>
      </div>
      <div class="rma-homepageGrid__item">
        <h2>Feature 3</h2>
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
  grid-gap: 40px 30px;
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