'use strict';

require('./_gallery-carousel.scss');

module.exports = {
  template: require('./gallery-carousel.html'),
  controller: ['$log', GalleryCarouselController],
  controllerAs: 'galleryCarouselCtrl'
};

function GalleryCarouselController($log) {
  $log.debug('GalleryCarouselController');

  this.active = 0;
  this.slides = [
    {image: '../../../assets/img/01.png', id: 0},
    {image: '../../../assets/img/02.png', id: 1},
    {image: '../../../assets/img/03.png', id: 2},
  ];
}