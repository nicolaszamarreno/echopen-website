import Pin from '@/components/pin/Pin';

export default {
  name: 'home',
  components: {
    pin: Pin,
  },
  data() {
    return {
    };
  },
  mounted() {
    let $nav = document.querySelector('header');
    window.addEventListener('scroll', () => {
      let pos = 100;

      if(document.body.scrollTop > pos){
        $nav.classList.add('header--fixed');
      }
      else if(document.body.scrollTop < pos){
          $nav.classList.remove('header--fixed');
      }
    });
  },
};
