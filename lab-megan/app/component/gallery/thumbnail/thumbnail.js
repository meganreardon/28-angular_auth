'use strict';

require('./_thumbnail.scss');

module.exports = {
  template: require('./thumbnail.html'),
  controller: ['$log', 'picService', ThumbnailController],
  controllerAs: 'thumbnailCtrl',
  bindings: {
    gallery: '<',
    pic: '<'
  }
};

function ThumbnailController($log, picService) {
  $log.debug('ThumbnailController');

  this.deleteAPic = function() {
    $log.debug('thumbnailCtrl.deleteAPic');
    $log.log('::: THUMBNAIL.JS inside DELETEAPIC :::');
    // $log.log('this.gallery is:', this.gallery);
    // $log.log('this.gallery._id is:', this.gallery._id);
    // $log.log('this.pic is:', this.pic);
    $log.log('this.pic._id is', this.pic._id);
    $log.log('this.gallery._id is', this.gallery._id);
    $log.log(':::');
    picService.deletePic(this.gallery, this.pic)
    .catch( err => {
      $log.error(err.message);
    });
  };
}
