import Afrique from '@/assets/afrique.jpg';
import BePartner from './bePartner/BePartner';
import BeContributor from './beContributor/BeContributor';

export default {
  name: 'product',
  data() {
    return {
      backgroundImage: Afrique,
    };
  },
  components: {
    bepartner: BePartner,
    becontributor: BeContributor,
  },
};
