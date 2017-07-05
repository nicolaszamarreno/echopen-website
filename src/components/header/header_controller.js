import Navigation from '@/components/navigation/Navigation';
import Logo from '@/assets/logo2x.png';

export default{
  name: 'header',
  data() {
    return {
      assetsPath: Logo,
    };
  },
  components: {
    navigation: Navigation,
  },
};
