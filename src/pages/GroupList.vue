<template>
  <div class="rma-layoutContent">
    <h1>Groups Landing page...</h1>
    <div class="rma-groupGrid">
      <div @click="$router.push('/group')">
        <div style="font-size: 24px; font-weight: 600; text-align: center; margin-bottom: 12px;">Create new group</div>
        <div class="rma-plusButton">+</div>
      </div>
      <div>
        <h2>Mock group 1</h2>
      </div>
      <div>
        <h2>Mock group 2</h2>
      </div>
    </div>

<!--     <rma-modal title="I'm a title"
              @close="showModal = false"
              v-if="showModal">
      <div>
        I'm mister Meeseeks, look at me!
      </div>
    </rma-modal> -->
  </div>
</template>
<script>
import RmaModal from '@/components/Modal';

export default {
  name: 'Groups',
  components: {
    RmaModal
  },
  data: function() {
    return {
      showModal: false
    }
  },
  methods: {
    createGroup: function() {
      //TODO: create a group
      //Open up a modal?
    }
  }
}
</script>
<style lang="scss" scoped>
.rma-groupGrid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;

  & > div {
    border: 2px solid #bbb;
    border-radius: 3px;
    min-height: 200px;
    padding: 8px 12px;
    cursor: pointer;

    &:hover {
      background-color: rgb(235, 235, 235);
    }
  }
}

.rma-plusButton {
  font-size: 54px;
  border: 2px solid #bbb;
  color: #bbb;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  line-height: 60px;
  margin: auto;
  text-align: center;
}
</style>