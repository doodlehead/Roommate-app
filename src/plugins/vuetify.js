import Vue from 'vue';
import Vuetify, {
  VCard,
  VRating,
  VToolbar,
  VCalendar,
  VMenu,
  VIcon
} from 'vuetify/lib';
import { Ripple } from 'vuetify/lib/directives';

Vue.use(Vuetify, {
  components: {
    VCard,
    VToolbar,
    VCalendar,
    VMenu,
    VIcon
  },
  directives: {
    Ripple,
  },
});

export default new Vuetify({
  icons: {
    iconfont: 'mdi',
  },
});
