<template>
  <div class="rma-layoutContent">
    <div v-if="calendarData">
      <h1>{{calendarData.name}}</h1>

      <v-calendar type="week"
                  intervalCount="17"
                  firstInterval="7"
                  :events="formatEvents"
                  event-color="#FAEBD7"
                  @click:time="handleTimelineClick"
                  @click:event="handleEventClick">
      </v-calendar>
      <v-menu v-model="selectedOpen"
            :close-on-content-click="false"
            :activator="selectedElement"
            offset-x>
        <div v-if="selectedEvent" class="rma-eventMenu">
          <div class="rma-eventMenu__header">

            <rma-input id="eventTitle"
                      v-model="selectedEvent.event_name"
                      class="rma-disguisedInput--dark"
                      style="margin: auto 0;"
                      stylePreset="dark"
                      :disguised="!editEvent"/>

            <v-btn icon style="margin: auto; margin-right: 0;"
                  @click="editEvent = true"
                  v-if="!editEvent">
              <v-icon>mdi-pencil</v-icon>
            </v-btn>
            <div v-else style="margin: auto; margin-right: 0;">
              <rma-button stylePreset="error" style="margin-right: 10px;" @click="editEvent = false;">Cancel</rma-button>
              <rma-button stylePreset="white">Save</rma-button>
            </div>
          </div>

          <div class="rma-eventMenu__content">
            <div>
              <div style="display: flex; margin-bottom: 10px;">
                <rma-input label="start date" id="startDate" v-model="selectedEvent.start_date" :disguised="!editEvent" style="flex-grow: 1; margin-right: 10px;"/>
                <rma-input label="end date" id="endDate" v-model="selectedEvent.end_date" :disguised="!editEvent" style="flex-grow: 1;"/>
              </div>
              <div style="display: flex;">
                <rma-time-selector label="start time" v-model="selectedEvent.start_time" :disguised="!editEvent" style="flex-grow: 1; margin-right: 10px;"/>
                <rma-time-selector label="end time" v-model="selectedEvent.end_time" :disguised="!editEvent" style="flex-grow: 1;"/>
              </div>
              <rma-select label="importance" :options="importanceOptions" v-model="selectedEvent.event_importance" :disguised="!editEvent" style="margin-bottom: 10px;"/>
              <label class="rma-fieldLabel">description</label>
              <rma-text-area rows="4" cols="50" v-model="selectedEvent.description" :disguised="!editEvent"/>
            </div>
            <div style="border-top: 1px solid var(--light-gray);">
              <rma-button stylePreset="error" style="margin-top: 10px;" @click="deleteEvent(selectedEvent.event_id)">Delete</rma-button>
            </div>
          </div>
        </div>
      </v-menu>

    </div>
    <div v-else>
      Loading data
    </div>
  </div>
</template>
<script>
import RmaInput from '@/components/Input';
import RmaButton from '@/components/Button';
import RmaTextArea from '@/components/TextArea';
import RmaTimeSelector from '@/components/TimeSelector';
import RmaSelect from '@/components/Select';

export default {
  name: 'Calendar',
  components: {
    RmaInput,
    RmaButton,
    RmaTextArea,
    RmaTimeSelector,
    RmaSelect
  },
  props: {
    id: String
  },
  data: function() {
    return {
      calendarData: null,

      selectedOpen: false,
      selectedElement: null,
      selectedEvent: null,
      editEvent: false,
      tempEvent: null,
      importanceOptions: {
        trivial: 'trivial',
        minor: 'minor',
        major: 'major',
        critical: 'critical'
      }
      //eventsMap: {}
    }
  },
  created: function() {
    this.loadCalendarData();
  },
  methods: {
    createEventJson: function(name, startMoment, endMoment, description, eventImportance, recurring) {
      return {
        calendarId: this.id,
        name,
        startTime: startMoment.format('HH:mm'),
        endTime: endMoment.format('HH:mm'),
        startDate: startMoment.format('YYYY-MM-DD'),
        endDate: startMoment.format('YYYY-MM-DD'),
        description,
        eventImportance,
        recurring
      }
    },
    loadCalendarData: function() {
      this.$rest.get(`/api/calendar/${this.id}`)
        .then(res => {
          this.calendarData = res.data;
          //this.processEventData(res.data.events);
        }).catch(err => {
          console.log(err);
        });
    },
    handleTimelineClick: function(event) {
      //Close the menu
      if(this.selectedOpen) {
        this.selectedOpen = false;
        this.editEvent = false;
        return;
      }

      //Default end time is 30 minutes after the start time
      let startTimeString = `${event.date} ${event.time.slice(0, 3) + "00"}`;
      let startTime = this.$moment(startTimeString, "YYYY-MM-DD HH:mm")
      let endTime = this.$moment(startTimeString, "YYYY-MM-DD HH:mm");
      //Default length
      endTime.add(60, 'minutes');

      //REST request
      this.$rest.post(`/api/calendar/${this.id}/event`, this.createEventJson('Untitled Event', startTime, endTime, '','minor' ,false))
        .then(res => {
          this.calendarData.events.push(this.formatEvent(res.data));
        }).catch(err => {
          console.log(err);
        });

    },
    //Clicking an event on the calendar
    handleEventClick: function({ nativeEvent, event }) {
      this.selectedElement = nativeEvent.target;
      this.selectedEvent = event;
      //You have to wait...?
      setTimeout(() => this.selectedOpen = true, 10);
      //Stop the event propogation
      nativeEvent.stopPropagation();
    },
    formatEvent: function(dbEvent) {
      dbEvent.start = `${this.$moment(dbEvent.start_date.substring(0, 10)).format('YYYY-MM-DD')} ${dbEvent.start_time}`;
      dbEvent.end = `${this.$moment(dbEvent.end_date.substring(0, 10)).format('YYYY-MM-DD')} ${dbEvent.end_time}`;
      dbEvent.name = dbEvent.event_name;
      return dbEvent;
    },
    deleteEvent: function(eventId) {
      //TODO: open up a prompt?
      this.$rest.delete(`/api/calendar/${this.id}/event/${eventId}`)
        .then(res => {
          //Reset menu stuff and reload calendar
          this.selectedOpen = false;
          this.selectedElement = null;
          this.selectedEvent = null;
          this.loadCalendarData();
        }).catch(err => {
          console.log(err);
        });
    },
    updateEvent: function(eventId) {
      this.$rest.put(`/api/calendar/${this.id}/event/${eventId}`, {
        name: this.selectedEvent.event_name,
        startTime: this.selectedEvent.start_time,
        endTime: this.selectedEvent.end_time,
        startDate: this.selectedEvent.start_date,
        endDate: this.selectedEvent.end_date,
        recurring: this.selectedEvent.recurring
      })
        .then(res => {
          this.loadCalendarData();
        }).catch(err => {
          console.log(err);
        });
    }
  },
  computed: {
    // getEvents: function() {
    //   return this.tempEvent ? [...this.calendarData.events, this.tempEvent] : [...this.calendarData.events];
    // },
    formatEvents: function() {
      if(!this.calendarData) return;
      //YYYY-MM-DD HH:mm
      //Format the JSON data so the vuetify calendar understands it
      return this.calendarData.events.map(elem => {
        elem.start = `${this.$moment(elem.start_date.substring(0, 10)).format('YYYY-MM-DD')} ${elem.start_time}`;
        elem.end = `${this.$moment(elem.end_date.substring(0, 10)).format('YYYY-MM-DD')} ${elem.end_time}`;
        elem.name = elem.event_name;
        return elem;
      });
    },
  }
}
</script>
<style lang="scss">
.rma-eventMenu {
  background-color: white;
  min-width: 350px;
  max-width: 550px;

  &__header {
    padding: 0 8px;
    background-color: var(--green1);
    color: white;
    display: flex;
    height: 44px;

    & > h3 {
      //height: 100%;
      padding-left: 10px;
      margin: auto 0;
    }
  }
  &__content {
    padding: 8px 18px;
  }
}

.rma-disguisedInput--dark {
  //background-color: rgb(30,30,30,0.25);
  border-radius: 3px;

  //Override the default input styles
  & > input {
    border: none !important;
    font-size: 1.17em !important;
    font-weight: bold !important;
  }
}
</style>