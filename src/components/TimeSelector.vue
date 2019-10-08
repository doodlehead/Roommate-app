<template>
  <div class="rma-timeSelector">
    <label class="rma-fieldLabel">{{label}}</label>
    <div style="display: flex; align-items: center;">
      <div class="rma-timeSelector__col" style="margin-right: 0px;">
        <v-icon v-if="!disguised" style="margin-bottom: -6px;" @click="changeHour(1)">mdi-chevron-up</v-icon>
        <input type="text" v-model="hours" style="" @input="$emit('input', getTime)" :readonly="disguised">
        <v-icon v-if="!disguised" style="margin-top: -6px;" @click="changeHour(-1)">mdi-chevron-down</v-icon>
      </div>
      :
      <div class="rma-timeSelector__col" style="margin-left: 0px;">
        <v-icon v-if="!disguised" style="margin-bottom: -6px;" @click="changeMinute(5)">mdi-chevron-up</v-icon>
        <input type="text" v-model="minutes" style="" @input="$emit('input', getTime)" :readonly="disguised">
        <v-icon v-if="!disguised" style="margin-top: -6px;" @click="changeMinute(-5)">mdi-chevron-down</v-icon>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'TimeSelector',
  props: {
    label: String,
    timeFormat: {
      type: String,
      default: '24', //Only does 24 for now
      validator: (v) => v == '12' || v == '24'
    },
    disguised: Boolean,
    //value should be HH:MM or HH:MM:SS
    value: {
      type: String,
      default: '00:00'
    }
  },
  data: function() {
    return {
      hours: '',
      minutes: '',
      givenValue: this.value
    }
  },
  methods: {
    changeHour: function(amount) {
      let time = this.$moment(this.getTime, 'HH:mm');
      time.add(amount, 'hours');
      this.givenValue = time.format('HH:mm');
      //computed value doesn't update in time lol
      this.$emit('input', this.givenValue);
    },
    changeMinute: function(amount) {
      let time = this.$moment(this.getTime, 'HH:mm');
      time.add(amount, 'minutes');
      this.givenValue = time.format('HH:mm');
      this.$emit('input', this.givenValue);
    }
  },
  created: function() {
    //The watch doesn't go off on initialization :(
    let tokens = this.givenValue.split(':');
    this.hours = tokens[0];
    this.minutes = tokens[1];
  },
  computed: {
    getTime: function() {
      return this.hours + ':' + this.minutes;
    },
  },
  watch: {
    value: function() {
      this.givenValue = this.value;
    },
    givenValue: function(newValue, oldValue) {
      let tokens = newValue.split(':');
      this.hours = tokens[0];
      this.minutes = tokens[1];
    }
  }
}
</script>
<style lang="scss" scoped>
.rma-timeSelector {
  & input {
    font-size: 18px;
    //border: 1px solid var(--gray);
    border-radius: 3px;
    padding: 2px 2px;
    width: 32px;
    text-align: center;
    z-index: 2;

    &[readonly] {
      outline: none;
    }
  }

  &__col {
    display: flex;
    flex-direction: column;
    flex-grow: 0;
    justify-content: center;
    height: 56px;

    & i {
      cursor: pointer;
      opacity: 0.65;
      transform: scaleY(0.85);
      &:hover {
        opacity: 1;
      }
    }
  }
}
</style>