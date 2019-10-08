<template>
  <div style="display: flex; flex-direction: column; positive: relative;">
    <label class="rma-fieldLabel">{{label}}</label>
    <div style="display: flex;">
      <input v-if="disguised" :value="value" readonly style="font-size: 16px; padding: 2px 8px; border: 1px solid transparent;"/>
      <select v-else class="rma-select" :value="value" @change="$emit('input', $event.target.value)">
        <option v-for="(value, key) in options" :key="key" :value="value">
          {{value}}
        </option>
      </select>
      <v-icon v-if="!disguised" class="rma-select__dropdownIcon">mdi-chevron-down</v-icon>
    </div>
  </div>
</template>
<script>
import RmaInput from '@/components/Input';

export default {
  name: 'Select',
  components: {
    RmaInput
  },
  props: {
    label: String,
    options: {
      type: Object,
      required: true
    },
    value: String,
    disguised: {
      type: Boolean,
      default: false
    }
  },
  data: function() {
    return {

    }
  }
}
</script>
<style lang="scss" scoped>
.rma-select {
  border: 1px solid var(--gray);
  border-radius: 2px;
  padding: 2px 8px;
  width: 160px;
  background-color: transparent;
  z-index: 2;

  &__dropdownIcon {
    position: relative;
    right: 24px;
  }
}
</style>