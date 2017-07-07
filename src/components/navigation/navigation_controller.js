export default{
  name: 'navigation',
  data() {
    return {};
  },
  mounted() {
    // console.log('mounted');
  },
  methods: {
    closeMenu() {
      const headerNav = document.querySelector('.header__nav ul');
      const burger = document.querySelector('.header__burger');
      const body = document.querySelector('body');
      headerNav.classList.remove('active');
      burger.classList.remove('active');
      body.classList.remove('overflow');
      this.$emit('incrementCount');
    },
  },
};
