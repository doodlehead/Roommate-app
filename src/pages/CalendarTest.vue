<template>
  <div class="rma-layoutContent rma-calendarTest">
    <h1>Calendar test</h1>
    <div>
      <h2>Weekly calendar</h2>
      <v-calendar type="week"
                  intervalCount="17"
                  firstInterval="7"
                  :events="events"
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
            Time: <br>
            Description: <br>
            Importance:  <br>
          </div>
        </div>
      </v-menu>
    </div>

  </div>
</template>
<script>
import RmaInput from '@/components/Input';
import RmaButton from '@/components/Button';

export default {
  name: 'CalendarTest',
  components: {
    RmaInput,
    RmaButton
  },
  data: function() {
    return {
      events: [],
      //showEventPopup: false,
      selectedEvent: null,
      selectedElement: null,
      selectedOpen: false,
      editEvent: false,
    }
  },
  methods: {
    handleTimelineClick: function(event) {
      console.log(event);

      //Close the menu
      if(this.selectedOpen) {
        this.selectedOpen = false;
        this.editEvent = false;
        return;
      }

      //Default end time is 30 minutes after the start time
      let startTime = `${event.date} ${event.time.slice(0, 3) + "00"}`;
      let endTime = this.$moment(startTime, "YYYY-MM-DD hh:mm");
      endTime.add(60, 'minutes');

      //Timestamp format: YYYY-MM-DD hh:mm
      this.events.push({
        name: 'Untitled event',
        start: startTime,
        end: endTime.format("YYYY-MM-DD hh:mm")
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
    }
  }
}
</script>
<style lang="scss">
.rma-calendarTest {
  & > div {
    padding: 12px;
  }
}

.rma-eventMenu {
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