<template>
  <div class="rma-layoutContent">
    <h1 style="text-align: center; font-size: 44px; margin-top: 40px; margin-bottom: 16px;">An application for roommates.</h1>
    <div class="rma-homepageGrid">
      <div class="rma-homepageItem">
        <h2>Create shared calendars</h2>
        <div class="rma-homepageItem__content">
          In Alpha!
        </div>
      </div>
      <div class="rma-homepageItem">
        <h2>Split money</h2>
        <div class="rma-homepageItem__content">
          Coming soon!
        </div>
      </div>
      <div class="rma-homepageItem">
        <h2>Post shared messages</h2>
        <div class="rma-homepageItem__content">
          Coming soon!
        </div>
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

  .rma-homepageItem {
    border: 2px solid #eaecef;
    padding: 16px 12px;
    border-radius: 2px;
    min-height: 200px;
    display: flex;
    flex-direction: column;

    h2 {
      text-align: center;
    }

    &__content {
      //TEMP
      font-size: 22px;
      text-align: center;
      margin: auto;
      text-transform: uppercase;
      font-style: italic;
      border: 1px solid #b0b0b0;
      border-radius: 5px;
      padding: 16px 20px;
    }
  }
}
</style>