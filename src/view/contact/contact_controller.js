import * as VueGoogleMaps from 'vue2-google-maps';
import Vue from 'vue';

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyBAnUiqoffaREZEuGJc7fbEanYlMid3DlU',
  },
});

export default {
  name: 'contact',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      center: { lat: 48.85463, lng: 2.34882 },
      markers: [{
        position: { lat: 48.85463, lng: 2.34882 },
      }],
    };
  },
};
