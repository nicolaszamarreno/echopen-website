import Logo from '@/assets/logo2x.png';
import Navigation from '@/components/navigation/Navigation';
import Newsletter from './newsletter/Newsletter';

export default {
  name: 'footer',
  data() {
    return {
      img: Logo,
    };
  },
  components: {
    navigation: Navigation,
    newsletter: Newsletter,
  },
};
