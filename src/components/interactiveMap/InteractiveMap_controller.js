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

    const $container = document.querySelector('.character__container');
    const $containerSVG = document.querySelector('.interactiveMap__draw');
    const $characters = document.querySelectorAll('.character');

    //Give size container SVG
    $containerSVG.style.width = $container.offsetWidth;
    $containerSVG.style.height = $container.offsetHeight;

    //Middle container
    const middleCardX = $container.offsetWidth / 2;
    const middleCardY = $container.offsetHeight / 2;

    const calcCoordonates = (_element) => {
      const arrayStyle = _element.getAttribute('style').split('; ');

      const posY = arrayStyle[0].replace('%', '').replace('top: ', '');
      const posX = arrayStyle[1].replace('%', '').replace('left: ', '');

      const defPosY = (($container.offsetHeight * posY) / 100) + (_element.offsetHeight / 2);
      const defPosX = (($container.offsetWidth * posX) / 100) + (_element.offsetWidth / 2);

        return {
        x: defPosX,
        y: defPosY,
      };
    };

    // Calcul middle card

    $characters.forEach((person) => {
      const pos = calcCoordonates(person);

      const $line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
      $line.setAttribute('x1', pos.x);
      $line.setAttribute('y1', pos.y);
      $line.setAttribute('x2', middleCardX);
      $line.setAttribute('y2', middleCardY);
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
