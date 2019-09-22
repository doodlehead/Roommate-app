<template>
  <div class="rma-layoutContent">
    <h1>Create a new roommate group</h1>

    <rma-input label="Group Name" id="group_name"/>
    <rma-button>Create</rma-button>
  </div>
</template>
<script>
import RmaInput from '@/components/Input';
import RmaButton from '@/components/Button';

export default {
  name: 'Group',
  components: {
    RmaInput,
    RmaButton
  }
}
</script>
<style lang="scss" scoped>

</style>