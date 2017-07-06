const animate = coord => setInterval(() => Math.random(coord / 2, coord), coord / 2, 100);
import Characters from './characters.js';

export default{
  name: 'interactiveMap',
  data() {
    return {
      characters: Characters,
      transitionClass: false,
      isMobile: false,
      cardData: {
        description: Characters[0].description,
        imgPath: Characters[0].imgPath,
      },
    };
  },
  mounted() {
    if (this.$el.offsetWidth < 700) {
      this.isMobile = true;
    }
  },
  methods: {
    changeCard(character) {
      this.transitionClass = true;
      setTimeout(() => {
        this.cardData = character;
        this.transitionClass = false;
      }, 100);
    },
  },
};
