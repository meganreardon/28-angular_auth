'use strict';

require('./_create-gallery.scss');

module.exports = {
  template: require('./create-gallery.html'),
  controller: ['$log', 'galleryService', CreateGalleryController],
  controllerAs: 'createGalleryCtrl',
  bindings: {
    gallery: '<'
  }
};

function CreateGalleryController($log, galleryService) {
  $log.debug('CreateGalleryController');

  this.gallery = {};

  this.createGallery = function() {
    galleryService.createGallery(this.gallery)
    .then( () => {
      this.gallery.name = null;
      this.gallery.desc = null;
    });
  };
  $log.log('::: CREATEGALLERY.JS :::');
  $log.log('this.gallery is:', this.gallery);
  $log.log(':::');
}
