<template>
  <button class="rma-button"
          @click="$emit('click')"
          :disabled="disabled ? true : false">
    <slot>{{text}}</slot>
  </button>
</template>
<script>
export default {
  name: 'rma-button',
  props: {
    text: String,
    disabled: Boolean
  }
}
</script>
<style lang="scss" scoped>
.rma-button {
  padding: 6px 14px;
  border: 1px solid #b0b0b0;
  border-radius: 2px;
  background-color: #41B883;
  color: white;
  cursor: pointer;

  &:hover {
    opacity: 0.85;
  }

  &--large {
    font-size: 20px;
    font-weight: 600;
    padding: 8px 18px;
  }

  &[disabled] {
    cursor: not-allowed;
    opacity: 0.5;
  }
}
</style>