<template>
  <div style="display: flex; flex-direction: column; max-width: 270px;">
    <label v-if="label" :for="id" class="rma-fieldLabel">{{label}}</label>
    <input :type="type"
          :id="id"
          :class="['rma-textInput', styleMap[stylePreset]]"
          v-bind="$attrs"
          v-on="inputListeners"
          :value="value"
          :readonly="disguised"
          :disguised="disguised"/>
  </div>
</template>
<script>

export default {
  name: 'Input',
  //inheritAttrs: false,
  props: {
    id: String,
    label: String,
    type: {
      type: String,
      default: 'text'
    },
    disguised: {
      type: Boolean,
      default: false
    },
    stylePreset: {
      type: String,
      validator: (v) => v == "dark"
    },
    name: String,
    rules: String,
    value: String
  },
  data: function() {
    return {
      styleMap: {
        dark: 'rma-textInput--dark'
      }
    }
  },
  computed: {
    inputListeners: function() {
      var vm = this;
      // `Object.assign` merges objects together to form a new object
      return Object.assign({},
        // We add all the listeners from the parent
        this.$listeners,
        // Then we can add custom listeners or override the
        // behavior of some listeners.
        {
          // This ensures that the component works with v-model
          input: function (event) {
            vm.$emit('input', event.target.value)
          }
        }
      )
    }
  }
}
</script>
<style lang="scss" scoped>
//Text input
.rma-textInput {
  font-size: 14px;
  padding: 6px 10px;
  border: 1px solid #aaa;
  border-radius: 2px;
  flex-grow: 1;

  &[disguised] {
    border: 1px solid transparent;
    outline: none;
  }

  &--dark:not([disguised]) {
    background-color: rgb(30,30,30,0.25);
  }
}
</style>