<template>
  <div class="rma-overlay">
    <div class="rma-modal">
      <div class="rma-modal__header">
        <h2 style="flex-grow: 1; margin: 0;">{{title}}</h2>
        <span class="close" @click="$emit('close')">&times;</span>
      </div>
      <div class="rma-modal__content">
        <slot/>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Modal',
  props: {
    title: String
  }
}
</script>
<style lang="scss" scoped>
.rma-overlay {
  //display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.5); /* Black w/ opacity */
}

.rma-modal {
  margin: 15% auto; /* 15% from the top and centered */
  //padding: 20px;
  border: 1px solid #888;
  width: 80%; /* Could be more or less, depending on screen size */
  background-color: #fefefe;

  &__header {
    display: flex;
    border: 1px solid red;
  }

  &__content {
    background-color: green;
  }

}

.close {
  color: #aaa;
  float: right;
  font-size: 40px;
  font-weight: bold;
  margin: auto 0;
}

.close:hover,
.close:focus {
  color: #555;
  text-decoration: none;
  cursor: pointer;
}
</style>