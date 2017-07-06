import Logo from '@/assets/logo2x.png';
import fb from '@/assets/FB.svg';
import instagram from '@/assets/instagram.svg';
import Navigation from '@/components/navigation/Navigation';
import Newsletter from './newsletter/Newsletter';

export default {
  name: 'footer',
  data() {
    return {
      img: Logo,
      social_network: {
        facebook: fb,
        insta: instagram,
      },
    };
  },
  components: {
    navigation: Navigation,
    newsletter: Newsletter,
  },
};
