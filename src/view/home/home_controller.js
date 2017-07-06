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
    const $nav = document.querySelector('header');
    
    if (document.querySelector('main').classList.contains('home')) {
      document.querySelector('.header').classList.add('header--posAbsolute');
    }
    
    window.addEventListener('scroll', () => {
      const pos = 100;
      
      if (document.body.scrollTop > pos) {
        $nav.classList.add('header--fixed');
      } else if (document.body.scrollTop < pos) {
        $nav.classList.remove('header--fixed');
      }
    });
  },
  destroyed() {
    document.querySelector('.header').classList.remove('header--posAbsolute');
  },
};
