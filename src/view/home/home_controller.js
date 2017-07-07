import Pin from '@/components/pin/Pin';
import Banner from '@/components/banner/Banner';
import InteractiveMap from '@/components/interactiveMap/InteractiveMap';

export default {
  name: 'home',
  components: {
    pin: Pin,
    banner: Banner,
    InteractiveMap,
  },
  data() {
    return {
      windowsWidth: '',
    };
  },
  mounted() {
    window.scrollTo(0, 0);
    const $nav = document.querySelector('header');

    if (document.querySelector('main').classList.contains('home')) {
      document.querySelector('.header').classList.add('header--posAbsolute');
    }
  },
  destroyed() {
    document.querySelector('.header').classList.remove('header--posAbsolute');
  },
};
