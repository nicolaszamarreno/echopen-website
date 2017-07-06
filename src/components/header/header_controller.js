import Navigation from '@/components/navigation/Navigation';
import Logo from '@/assets/logo2x.png';

export default{
  name: 'header',
  data() {
    return {
      assetsPath: Logo,
      count: 0,
    };
  },
  components: {
    navigation: Navigation,
  },
  methods: {
    toggleMenu() {
      const nav = document.querySelector('.header__nav ul');
      const burger = document.querySelector('.header__burger');
      if (this.count % 2 === 0) {
        nav.classList = 'active';
        // burger.classList += 'header__burger active';
        burger.classList = 'header__burger active';
      } else {
        nav.classList = '';
        burger.classList = 'header__burger';
      }
      this.count++;
    },
  },
};
