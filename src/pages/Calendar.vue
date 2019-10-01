<template>
  <div class="rma-layoutContent">
    <div v-if="calendarData">
      <h1>{{calendarData.name}}</h1>

      <v-calendar type="week"
                  intervalCount="17"
                  firstInterval="7"
                  :events="formatEvents"
                  event-color="w"
                  @click:time="handleTimelineClick"
                  @click:event="handleEventClick">
      </v-calendar>
      <v-menu v-model="selectedOpen"
            :close-on-content-click="false"
            :activator="selectedElement"
            offset-x>
        <div v-if="selectedEvent" class="rma-eventMenu">
          <div class="rma-eventMenu__header">

            <rma-input v-if="editEvent"
                      id="eventTitle"
                      v-model="selectedEvent.name"
                      class="rma-disguisedInput"
                      style="flex-grow: 1"/>
            <h3 v-else>{{selectedEvent.name}}</h3>

            <v-btn icon style="margin-left: auto;"
                  @click="editEvent = true">
              <v-icon>mdi-pencil</v-icon>
            </v-btn>
          </div>

          <div class="rma-eventMenu__content">
            <div>Time: {{selectedEvent.start}} to {{selectedEvent.end}}</div>
            Description: <br>
            Importance:  <br>
            {{selectedEvent}}
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

export default {
  name: 'Calendar',
  components: {
    RmaInput
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
      //eventsMap: {}
    }
  },
  created: function() {
    this.$rest.get(`/api/calendar/${this.id}`)
      .then(res => {
        this.calendarData = res.data;
        //this.processEventData(res.data.events);
      }).catch(err => {
        console.log(err);
      });
  },
  methods: {
    createEventJson: function(name, startMoment, endMoment, recurring) {
      return {
        name,
        startTime: startMoment.format('HH:mm'),
        endTime: endMoment.format('HH:mm'),
        startDate: startMoment.format('YYYY-MM-DD'),
        endDate: startMoment.format('YYYY-MM-DD'),
        recurring
      }
    },
    handleTimelineClick: function(event) {
      console.log(event);

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
      this.$rest.post(`/api/calendar/${this.id}/event`, this.createEventJson('Untitled Event', startTime, endTime, false))
        .then(res => {
          this.calendarData.events.push(this.formatEvent(res.data));
        }).catch(err => {
          console.log(err);
        });

    },
    //Clicking an event on the calendar
    handleEventClick: function({ nativeEvent, event }) {
      console.log(event);

      this.selectedElement = nativeEvent.target;
      this.selectedEvent = event;
      //You have to wait...?
      setTimeout(() => this.selectedOpen = true, 10);

      console.log("Changing selected event");
      //Stop the event propogation
      nativeEvent.stopPropagation();
    },
    formatEvent: function(dbEvent) {
      dbEvent.start = `${this.$moment(dbEvent.start_date).format('YYYY-MM-DD')} ${dbEvent.start_time}`;
      dbEvent.end = `${this.$moment(dbEvent.end_date).format('YYYY-MM-DD')} ${dbEvent.end_time}`;
      dbEvent.name = dbEvent.event_name;
      return dbEvent;
    }
    // processEventData: function(eventLists) {
    //   eventLists.forEach(elem => {
    //     this.eventsMap[elem.event_id] = elem;
    //   });
    // }
  },
  computed: {
    getEvents: function() {
      return this.tempEvent ? [...this.calendarData.events, this.tempEvent] : [...this.calendarData.events];
    },
    formatEvents: function() {
      if(!this.calendarData) return;
      //YYYY-MM-DD HH:mm
      //Format the JSON data so the vuetify calendar understands it
      return this.calendarData.events.map(elem => {
        elem.start = `${this.$moment(elem.start_date).format('YYYY-MM-DD')} ${elem.start_time}`;
        elem.end = `${this.$moment(elem.end_date).format('YYYY-MM-DD')} ${elem.end_time}`;
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

.rma-disguisedInput {
  background-color: rgb(30,30,30,0.25);
  border-radius: 3px;

  //Override the default input styles
  & > input {
    border: none !important;
    font-size: 1.17em !important;
    font-weight: bold !important;
  }
}
</style>