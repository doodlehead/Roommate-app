<template>
  <ValidationProvider :rules="rules"
                      v-slot="{ errors }"
                      :name="name">
    <rma-input v-model="innerValue" v-bind="$attrs"/>
    <div v-if="errors[0]" class="rma-validation">* {{ errors[0] }}</div>
    <div v-else style="padding: 7px;"></div>
  </ValidationProvider>
</template>
<script>
import RmaInput from '@/components/Input';

export default {
  name: 'InputValidated',
  components: {
    RmaInput
  },
  props: {
    value: null,
    rules: String,
    name: String
  },
  data: function() {
    return {
      innerValue: null
    }
  },
  watch: {
    innerValue: function(val) {
      this.$emit('input', val);
    }
  }
}
</script>
<style lang="scss" scoped>

</style>