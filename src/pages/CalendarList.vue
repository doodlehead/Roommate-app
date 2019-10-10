<template>
  <div class="rma-layoutContent">
    <h1 style="margin-bottom: 16px;">Calendar List</h1>
    <rma-button @click="openMenu">Create new calendar</rma-button>
    <v-menu v-model="showMenu"
          :close-on-content-click="false"
          :activator="selectedElement"
          offset-y>
      <div class="rma-popupMenu">
        <div class="rma-popupMenu__header"><h3>New Calendar Form</h3></div>
        <div class="rma-popupMenu__content">
          <rma-input label="Calendar name" id="calendar_name" v-model="calendarName" @keyup.enter="createCalendar" style="margin-bottom: 10px;"/>
          <rma-button @click="createCalendar">Create</rma-button>
        </div>
      </div>
    </v-menu>

    <div class="rma-cardGrid" style="margin-top: 12px;">
      <div v-for="calendar in calendarList"
            :key="calendar.calendar_id"
            class="rma-calendarCard">
        <div style="margin-bottom: 10px; padding-bottom: 10px; border-bottom: 1px solid var(--gray); font-size: 22px;">
          {{calendar.calendar_name}}
        </div>
        <div style="display: flex;">
          <rma-button @click="deleteCalendar(calendar.calendar_id)" stylePreset="error" style="margin-right: 10px;">Delete</rma-button>
          <rma-button @click="$router.push(`/calendar/${calendar.calendar_id}`)">View</rma-button>
        </div>
      </div>
    </div>

  </div>
</template>
<script>
import RmaButton from '@/components/Button';
import RmaInput from '@/components/Input';

export default {
  name: 'CalendarList',
  components: {
    RmaButton,
    RmaInput
  },
  data: function() {
    return {
      calendarList: [],
      showMenu: false,
      selectedElement: null,
      calendarName: ''
    }
  },
  created: function() {
    this.getUserCalendars();
  },
  methods: {
    getUserCalendars: function() {
      this.$rest.get('/api/calendars')
        .then(res => {
          this.calendarList = res.data;
        }).catch(err => {
          console.log(err);
        });
    },
    openMenu: function(event) {
      console.log(event);
      this.selectedElement = event.target;
      setTimeout(() => this.showMenu = true, 10);
    },
    createCalendar: function() {
      this.$rest.post('/api/calendar', {name: this.calendarName})
        .then(res => {
          this.showMenu = false;
          this.getUserCalendars();
        }).catch(err => {
          console.log(err);
        });
    },
    deleteCalendar: function(calendarId) {
      this.$rest.delete(`/api/calendar/${calendarId}`)
        .then(res => {
          this.getUserCalendars();
        }).catch(err => {
          console.log(err);
        });
    }
  }
}
</script>
<style lang="scss" scoped>
.rma-popupMenu {
  background-color: white;
  min-width: 350px;

  &__header {
    padding: 8px;
    background-color: var(--green1);
    color: white;
    display: flex;

    & > h3 {
      //height: 100%;
      padding-left: 10px;
      margin: auto 0;
    }
  }
  &__content {
    padding: 8px 12px;
  }
}

.rma-calendarCard {
  border: 2px solid var(--gray);
  border-radius: 3px;
  padding: 12px;
}
</style>