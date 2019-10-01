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
      validator: (v) => v == "light" || v == "dark"
    }
  },
  data: function() {
    return {
      styleClassMap: {
        light: 'rma-button--light',
        dark: 'rma-button--dark'
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.rma-button {
  padding: 6px 14px;
  border: 1px solid var(--gray);
  border-radius: 2px;
  background-color: var(--green1);
  color: white;
  cursor: pointer;

  &--light {
    color: var(--text-color);
    background-color: white;
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