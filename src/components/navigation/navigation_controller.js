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
      headerNav.classList.remove('active');
      burger.classList.remove('active');
      this.$emit('incrementCount');
    },
  },
};
