const Vue = require('vue');
const utils = require('../utils');

const Carousel = require('../../../src/components/carousel/Carousel.vue');
const Slide = require('../../../src/components/carousel/Slide.vue');

describe('Pagination', () => {
  let vm;
  let carouselInstance;
  let $pagination;

  beforeEach(() => {
    vm = new Vue({
      el: document.createElement('div'),
      render: (h) => h(Carousel, { props: { paginationEnabled: true, perPage: 1 } }, [h(Slide), h(Slide), h(Slide), h(Slide), h(Slide)]),
    });
    carouselInstance = vm.$children[0];
    $pagination = vm.$el.querySelector('.carousel-pagination');
  });

  it('should mount successfully', () => {
    expect($pagination).toBeDefined();

    return utils.expectToMatchSnapshot(vm);
  });

  it('should render a next button', () => {
    expect(vm.$el.querySelector('svg.carousel-next-button')).toBeDefined();

    return utils.expectToMatchSnapshot(vm);
  });

  it('should render a prev button', () => {
    expect(vm.$el.querySelector('svg.carousel-back-button')).toBeDefined();

    return utils.expectToMatchSnapshot(vm);
  });
});
