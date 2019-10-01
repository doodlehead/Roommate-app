<template>
  <div class="rma-layoutContent">
    <h1 style="margin-bottom: 10px;">My Groups</h1>
    <p style="margin-bottom: 10px;">Create a group and add your roommates to the group.</p>
    <div class="rma-groupGrid">
      <div @click="$router.push('/group')">
        <div style="font-size: 24px; font-weight: 600; text-align: center; margin-bottom: 12px;">Create new group</div>
        <div class="rma-plusButton">+</div>
      </div>
      <div v-for="group in groupList" :key="group.group_id" @click="gotoGroup(group.group_id)">
        <h2>{{group.group_name}}</h2>
        <div class="rma-groupCard__triangle"></div>
        <div v-if="group.members">
          <div style="font-size: 18px;">Members</div>
          <div v-for="group in group.members"
                :key="group.group_id"
                style="border: 1px solid #b0b0b0; border-radius: 3px; margin-bottom: 6px; padding: 4px 4px 4px 16px; border-left: 3px solid var(--green1);">
            {{group.first_name + " " + group.last_name}}
          </div>
        </div>
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
  },
  watch: {
    groupList: function() {
      this.groupList.forEach(group => {
        this.$rest.get(`/api/group/${group.group_id}/users`)
          .then(res => {
            //Keep reactivity when adding a new property.
            this.$set(group, 'members', res.data);
          }).catch(err => {
            console.log(err);
          });
      });
    }
  }
}
</script>
<style lang="scss" scoped>
.rma-groupGrid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 20px;

  //Group card
  & > div {
    border: 2px solid #bbb;
    border-radius: 3px;
    min-height: 200px;
    padding: 12px 18px;
    cursor: pointer;

    position: relative;

    & > h2 {
      padding-bottom: 8px;
      margin-bottom: 8px;
      border-bottom: 1px solid #bbb;
    }

    &:hover {
      background-color: rgb(235, 235, 235);
    }

    .rma-groupCard__triangle {
      position: absolute;
      top: -1px;
      right: -1px;
      --triangle-size: 20px;

      border-right: var(--triangle-size) solid var(--green1);
      border-top: var(--triangle-size) solid var(--green1);
      border-left: var(--triangle-size) solid transparent;
      border-bottom: var(--triangle-size) solid transparent;

      width: 18px;
      height: 18px;
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