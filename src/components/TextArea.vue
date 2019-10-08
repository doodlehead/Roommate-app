<template>
  <div>
    <label class="rma-fieldLabel">{{label}}</label>
    <textarea :value="value"
              v-bind="$attrs"
              @input="$emit('input', $event.target.value)"
              :readonly="disguised"
              :disguised="disguised"
              class="rma-textArea"/>
  </div>
</template>
<script>
export default {
  name: 'TextArea',
  props: {
    label: String,
    value: String,
    disguised: {
      type: Boolean,
      default: false
    }
  }
}
</script>
<style lang="scss" scoped>
.rma-textArea {
  border: 1px solid var(--gray);
  border-radius: 3px;

  &[disguised] {
    outline: none;
    border: 1px solid transparent;
  }
}
</style>