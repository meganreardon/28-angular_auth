'use strict';

describe('Auth Service', function() {

  beforeEach( () => {
    angular.mock.module('cfgram');
    angular.mock.inject(($rootScope, authService, $window, $httpBackend) => {
      this.$window = $window;
      this.$rootScope = $rootScope;
      this.authService = authService;
      this.$httpBackend = $httpBackend;
    });
  });

  describe('authService.getToken()', () => {
    it('should return a token', () => {
      this.authService.token = null;
      this.$window.localStorage.setItem('token', 'test token');

      this.authService.getToken()
      .then( token => {
        expect(token).toEqual('test token');
      })
      .catch( err => { // we don't need this catch
        expect(err).toEqual(null);
      });

      this.$rootScope.$apply();  // for now throw this at bottom of test pages
    });
  });

  describe('authService.login()', () => {
    it('should allow a user to log in', () => {
      this.authService.token = null;
      this.$window.localStorage.setItem('token', 'test token two');
      this.authService.user = 'test user';

      this.authService.login(user)
      .then( token => {
        expect
      })
    })
  })

});
