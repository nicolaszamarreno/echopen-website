// import Flickity from 'flickity';
import Afrique from '@/assets/afrique.jpg';
import Asie from '@/assets/asie.jpg';
import BePartner from './bePartner/BePartner';
import BeContributor from './beContributor/BeContributor';

export default {
  name: 'product',
  data() {
    return {
      backgroundImage: Afrique,
      slides: {},
      count: 1,
      dateObject: {
        1: {
          id: 1,
          date: 1973,
          text: 'consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
          img: Afrique,
          isActive: false,
        },
        2: {
          id: 2,
          date: 1998,
          text: 'consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
          img: Afrique,
          isActive: false,
        },
        3: {
          id: 3,
          date: 2007,
          text: 'consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
          img: Asie,
          isActive: false,
        },
        4: {
          id: 4,
          date: 2018,
          text: 'consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
          img: Afrique,
          isActive: true,
        },
        5: {
          id: 5,
          date: 2025,
          text: 'consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
          img: Afrique,
          isActive: false,
        },
      },
    };
  },
  components: {
    bepartner: BePartner,
    becontributor: BeContributor,
  },
  created() {
    setInterval(() => {
      this.slides = this.dateObject[this.count];
      this.slides.isActive = true;
      this.count++;
      if (this.count > 5) {
        this.count = 1;
      }
    }, 1000);
  },
  methods: {
    slide(e) {
      this.count = e.target.getAttribute('class');
      this.count = this.count.slice(-1)[0];
    },
  },
};
