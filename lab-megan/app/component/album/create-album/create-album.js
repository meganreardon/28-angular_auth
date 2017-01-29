'use strict';

module.exports = {
  template: require('./create-album.html'),
  controller: ['$log', 'albumService', CreateAlbumController],
  controllerAs: 'createAlbumCtrl'
};

function CreateAlbumController($log, albumService) {
  $log.debug('CreateAlbumController');

  this.album = {};

  this.createAlbum = function() {
    albumService.createAlbum(this.album)
    .then( () => {
      this.album.name = null;
      this.album.desc = null;
    });
  };
}
