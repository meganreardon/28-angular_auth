'use strict';

require('./_edit-gallery.scss');

module.exports = {
  template: require('./edit-gallery.html'),
  controller: ['$log', 'galleryService', EditGalleryController],
  controllerAs: 'editGalleryCtrl',
  bindings: {
    gallery: '<'
  }
};

function EditGalleryController($log, galleryService) {
  $log.debug('EditGalleryController');

  this.updateGallery = function() {
    galleryService.updateGallery(this.gallery._id, this.gallery);
    $log.log('::: EDIT-GALLERY.JS');
    $log.log('this.gallery._id is:', this.gallery._id);
  };
}
