import Flickity from 'flickity';
import asNavFor from 'flickity-as-nav-for';
import Afrique from '@/assets/afrique.jpg';
import Asie from '@/assets/asie.jpg';
import Pin from '@/components/pin/Pin';
import Banner from '@/components/banner/Banner';
import BePartner from './bePartner/BePartner';
import BeContributor from './beContributor/BeContributor';


export default {
  name: 'product',
  data() {
    return {
      dateObject: {
        1: {
          id: 1,
          date: 1973,
          text: 'consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
          img: Afrique,
        },
        2: {
          id: 2,
          date: 1998,
          text: 'consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
          img: Afrique,
        },
        3: {
          id: 3,
          date: 2007,
          text: 'consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
          img: Asie,
        },
        4: {
          id: 4,
          date: 2018,
          text: 'consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
          img: Afrique,
        },
        5: {
          id: 5,
          date: 2025,
          text: 'consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
          img: Afrique,
        },
      },
    };
  },
  components: {
    bepartner: BePartner,
    becontributor: BeContributor,
    pin: Pin,
    banner: Banner,
  },
  mounted() {
    const productSlider = new Flickity('.countrySlider__content', {
      prevNextButtons: false,
      pageDots: false,
      autoPlay: 6000,

    });

    const productNav = new Flickity('.countrySlider__selection', {
      asNavFor: '.countrySlider__content',
      contain: false,
      pageDots: false,
      prevNextButtons: false,
    });
  },
  methods: {
  },
};
