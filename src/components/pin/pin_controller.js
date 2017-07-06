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

    const observer = new IntersectionObserver((observables) => {
      observables.forEach((observable) => {
              // L'élément devient visible
        if (observable.intersectionRatio > 0.5) {
          observable.target.classList.remove('not-visible');
          observer.unobserve(observable.target);
        }
      });
    }, {
      threshold: [0.5],
    });

// On observe nos éléments
    const items = document.querySelectorAll('.main-carousel');
    items.forEach((item) => {
      item.classList.add('not-visible');
      observer.observe(item);
    });
  },
};
