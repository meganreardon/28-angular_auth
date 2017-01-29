'use strict';

require('./_home.scss');

module.exports = ['$log', '$rootScope', 'albumService', HomeController];

function HomeController($log, $rootScope, albumService) {
  $log.debug('HomeController');

  this.albums = [];

  this.fetchAlbums = function() {
    albumService.fetchAlbums()
    .then( albums => {
      this.albums = albums;
    });
  };

  this.fetchAlbums();

  $rootScope.$on('$locationChangeSuccess', () => {
    this.fetchAlbums();
  });
}
