<template>
  <button :class="['rma-button', styleClassMap[stylePreset]]"
          @click="$emit('click', $event)"
          :disabled="disabled ? true : false">
    <slot>{{text}}</slot>
  </button>
</template>
<script>
export default {
  name: 'rma-button',
  props: {
    text: String,
    disabled: Boolean,
    stylePreset: {
      type: String,
      validator: (v) => v == "light" || v == "dark" || v == "error" || v == "white" || "errorLight"
    }
  },
  data: function() {
    return {
      styleClassMap: {
        light: 'rma-button--light',
        dark: 'rma-button--dark',
        error: 'rma-button--error',
        errorLight: 'rma-button--errorLight',
        white: 'rma-button--white'
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.rma-button {
  padding: 6px 14px;
  border: 1px solid var(--gray);
  border-radius: 3px;
  background-color: var(--green1);
  color: white;
  cursor: pointer;

  &--light {
    color: var(--text-color);
    background-color: white;
  }
  &--error {
    color: white;
    background-color: var(--red);
  }
  &--errorLight {
    color: var(--red);
    background-color: white;
    border: 1px solid var(--red);

    &:hover {
      background-color: var(--light-red);
    }
  }
  &--white {
    color: white;
    border: 1px solid white;
    background-color: transparent;
  }

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