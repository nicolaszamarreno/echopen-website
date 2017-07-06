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
  methods: {
    toggleMenu() {
      this.windowsWidth = window.innerWidth;
      if (this.windowsWidth <= 991) {
        console.log('ok');
      }
      const body = document.querySelector('body');
      const nav = document.querySelector('.header__nav ul');
      const burger = document.querySelector('.header__burger');
      if (this.count % 2 === 0) {
        nav.classList = 'active';
        // burger.classList += 'header__burger active';
        burger.classList = 'header__burger active';
        body.classList = 'overflow';
      } else {
        nav.classList = '';
        burger.classList = 'header__burger';
        body.classList = '';
      }
      this.count++;
      console.log(this.count);
    },
    incrementC() {
      this.count++;
      console.log(this.count);
    },
  },
};
