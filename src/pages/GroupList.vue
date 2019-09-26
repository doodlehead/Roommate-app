<template>
  <div class="rma-layoutContent">
    <h1>Groups Landing page...</h1>
    <div class="rma-groupGrid">
      <div @click="$router.push('/group')">
        <div style="font-size: 24px; font-weight: 600; text-align: center; margin-bottom: 12px;">Create new group</div>
        <div class="rma-plusButton">+</div>
      </div>
      <div v-for="group in groupList" :key="group.group_id" @click="gotoGroup(group.group_id)">
        <h2>{{group.group_name}}</h2>

      </div>
    </div>
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
      showModal: false,
      groupList: []
    }
  },
  methods: {
    gotoGroup: function(group_id) {
      this.$router.push(`/group/${group_id}`);
    }
  },
  created: function() {
    this.$rest.get('/api/groups')
      .then(res => {
        this.groupList.push(...res.data);
      }).catch(err => {
        console.log(err);
      });
  }
}
</script>
<style lang="scss" scoped>
.rma-groupGrid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 20px;

  & > div {
    border: 2px solid #bbb;
    border-radius: 3px;
    min-height: 200px;
    padding: 12px 18px;
    cursor: pointer;

    & > h2 {
      padding-bottom: 8px;
      border-bottom: 1px solid #bbb;
    }

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