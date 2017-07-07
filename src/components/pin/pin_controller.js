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

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
              // L'élément devient visible
        if (entry.intersectionRatio > 0.5) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: [0.5],
    });

// On observe nos éléments
    const items = document.querySelectorAll('.main-carousel');
    items.forEach((item) => {
      observer.observe(item);
    });
  },
};
