<template>
  <table class="rma-table">
    <thead>
      <tr>
        <slot name="header"/>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(row, index) in rowData" :key="index">
        <slot v-bind:row="row"/>
      </tr>
    </tbody>
  </table>
</template>
<script>
export default {
  name: 'SimpleTable',
  props: {
    rowData: {
      type: Array,
      required: true
    }
  }
}
</script>
<style lang="scss" scoped>

</style>