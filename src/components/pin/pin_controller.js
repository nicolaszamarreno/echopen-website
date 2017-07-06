import Flickity from 'flickity';

export default{
  name: 'pin',
  props: ['options'],
  data() {
    return {
    };
  },
  mounted() {
    const flkty = new Flickity('.main-carousel', {
      prevNextButtons: false,
      pageDots: false,
      groupCells: true,
    });
  },
};
