import Navigation from '@/components/navigation/Navigation';
import Logo from '@/assets/logo.svg';

export default{
  name: 'header',
  data() {
    return {
      count: 0,
      windowsWidth: '',
      logo: Logo,
    };
  },
  components: {
    navigation: Navigation,
  },
  mounted() {
    const $nav = document.querySelector('header');

    window.addEventListener('scroll', () => {
      const pos = 100;

      const positionPage = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
      if (positionPage > pos) {
        $nav.classList.add('header--fixed');
      } else if (document.body.scrollTop < pos) {
        $nav.classList.remove('header--fixed');
      }
    });
  },
  methods: {
    toggleMenu() {
      this.windowsWidth = window.innerWidth;
      const body = document.querySelector('body');
      const nav = document.querySelector('.header__nav ul');
      const burger = document.querySelector('.header__burger');
      if (this.count % 2 === 0) {
        nav.classList = 'active';
        // burger.classList += 'header__burger active';
        burger.classList = 'header__burger active';
        body.classList = 'overflow';
        console.log('aaa');
      } else {
        console.log('hello');
        nav.classList = '';
        burger.classList = 'header__burger';
        body.classList = '';
      }
      this.count++;
    },
    incrementC() {
      this.count++;
    },
  },
};
