'use strict';

module.exports = ['$q', '$log', '$http', 'authService', albumService];

function albumService($q, $log, $http, authService) {
  $log.debug('albumService()');

  let service = {};
  service.albums = [];

  service.createAlbum = function(album) {
    $log.debug('albumService.createAlbum()');

    return authService.getToken()
    .then( token => {
      let url = `${__API_URL__}/api/album`;
      let config = {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      };

      return $http.post(url, album, config);
    })
    .then( res => {
      $log.log('album created');
      let album = res.data;
      service.albums.unshift(album);
      return album;
    })
    .catch( err => {
      $log.error(err.message);
      return $q.reject(err);
    });
  };

  service.deleteAlbums = function(albumID, albumData) {
    return authService.getToken()
    .then( token => {
      let url = `${__API_URL__}/api/album/${albumID}`;
      let config = {
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${token}`
        }
      };
    });
  };

  service.fetchAlbums = function() {
    $log.debug('albumService.fetchAlbums()');

    return authService.getToken()
    .then( token => {
      let url = `${__API_URL__}/api/album`;
      let config = {
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${token}`
        }
      };

      return $http.get(url, config);
    })
    .then( res => {
      $log.log('albums retrieved');
      service.albums = res.data;
      return service.albums;
    })
    .catch( err => {
      $log.error(err.message);
      return $q.reject(err);
    });
  };

  return service;
}
