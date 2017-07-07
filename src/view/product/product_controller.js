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
          date: 2010,
          text: 'Près de 500 millions de personnes en Afrique n’ont pas d’accès aux soins aux soins de santé. La Guinée Bissau déclarée l’accès aux soins comme cause national',
          img: Afrique,
        },
        2: {
          id: 2,
          date: 2014,
          text: 'Plus d’un million d’enfants meurent chaque année d’une pneumonie faute de soins d’urgence',
          img: Afrique,
        },
        3: {
          id: 3,
          date: 2018,
          text: 'EchoPen développe une sonde pour accéder les soins ',
          img: Asie,
        },
        4: {
          id: 4,
          date: 2019,
          text: 'EchoPen forme 50 médecins de médecins sans frontière à l’echoLife pour détecter au Burkina Fasso  les pneumopathies infantiles',
          img: Afrique,
        },
        5: {
          id: 5,
          date: 2020,
          text: 'Près de 200 000 enfants sauvés au Burkina Faso grâce à Echopen ',
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
