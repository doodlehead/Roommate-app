<template>
  <div class="rma-card">
    <h3>{{title}}</h3>
    <p><slot/></p>
  </div>
</template>
<script>
export default {
  name: 'Card',
  props: {
    title: {
      type: String,
      required: true
    }
  }
}
</script>
<style lang="scss" scoped>
.rma-card {
  border: 1px solid #b0b0b0;
  border-radius: 5px;
  padding: 8px 12px;
  min-height: 100px;

  & > h3 {
    border-bottom: 1px solid #b0b0b0;
    padding-bottom: 4px;
    margin-bottom: 12px;
  }

  & > p {
    margin-bottom: 10px;
  }
}
</style>