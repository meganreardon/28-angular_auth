'use strict';

describe('Thumbnail Component', function() {

  beforeEach(() => {
    angular.mock.module('cfgram'); // eslint-disable-line
    angular.mock.inject(($rootScope, $componentController, $httpBackend, authService) => { // eslint-disable-line
      this.$rootScope = $rootScope;
      this.$componentController = $componentController;
      this.$httpBackend = $httpBackend;
      this.authService = authService;
    });
  });

// below is from other test
  // describe('galleryService.deleteGallery()', () => {
  //   it('should delete a gallery', () => {
  //     let galleryID = 'testid';
  //     let headers = {
  //       Authorization: 'Bearer test token',
  //       Accept: 'application/json, text/plain, */*'
  //     };
  //
  //     this.$httpBackend.expectDELETE('http://localhost:8000/api/gallery/testid', headers)
  //     .respond(204);
  //
  //     this.galleryService.deleteGallery(galleryID);
  //     this.$httpBackend.flush();
  //     this.$rootScope.$apply();
  //   });
  // });
// end from another page

  describe('thumbnail component test, delete pic', () => {
    it('should delete a photograph', () => {

      let galleryID = 'testGalleryID';
      let picID = 'testPicID';

      let headers = {
        Authorization: 'Bearer test token',
        Accept: 'application/json, text/plain, */*'
      };

      let mockBindings = {
        gallery: {
          name: 'test gallery name',
          desc: 'test gallery description'
        },
        pic: {
          name: 'test picture name',
          desc: 'test picture description'
        }
      };

      let thumbnailCtrl = this.$componentController('thumbnail', null, mockBindings);

      this.$httpBackend.expectDELETE('http://localhost:8000/api/gallery/testGalleryID/pic/testPicID', headers)
      .respond(204);

      thumbnailCtrl.deleteAPic();

      this.$rootScope.$apply();
    });
  });

});
