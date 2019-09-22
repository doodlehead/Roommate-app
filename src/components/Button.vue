<template>
  <button class="rma-button"
          @click="$emit('click')">
    <slot>{{text}}</slot>
  </button>
</template>
<script>
export default {
  name: 'rma-button',
  props: {
    text: String
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
}
</style>