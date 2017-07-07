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

    const $container = document.querySelector('.interactiveMap__container');
    const $containerSVG = document.querySelector('.interactiveMap__draw');
    const $characters = document.querySelectorAll('.character');
    const $cardCharacter = document.querySelector('.character__card');

    $containerSVG.style.width = $container.offsetWidth;
    $containerSVG.style.height = $container.offsetHeight;

    // Calcul middle card

    $characters.forEach((person) => {
      const $line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
      $line.setAttribute('x1', '20');
      $line.setAttribute('y1', '20');
      $line.setAttribute('x2', '300');
      $line.setAttribute('y2', '300');
      $line.setAttribute('style', 'stroke:rgba(0,0,0, .2);stroke-width:1;');
      $containerSVG.appendChild($line);
    });
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
