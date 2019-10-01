<template>
  <div style="display: flex; flex-direction: column; max-width: 270px;">
    <label v-if="label" :for="id" style="margin-bottom: 4px; font-weight: 600;">{{label}}</label>
    <input :type="type"
          :id="id"
          class="rma-textInput"
          v-bind="$attrs"
          v-on="inputListeners"
          :value="value"/>
  </div>
</template>
<script>
export default {
  name: 'Input',
  //inheritAttrs: false,
  props: {
    id: {
      type: String,
      required: true
    },
    label: String,
    type: {
      type: String,
      default: 'text'
    },
    name: String,
    rules: String,
    value: String
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
}
</style>