'use strict';

require('./_a-modal.scss');

module.exports = function() {
  return {
    restrict: 'EAC',
    template: require('./a-modal.html'),
    controller: ['$log', '$uibModal', AModalController],
    bindToController: true,
    controllerAs: 'aModalCtrl',
    scope: {
      title: '@'
    }
  };
};

function AModalController($log, $uibModal) {
  $log.debug('AModalController');

  this.stuffInModal = ['Congratulations! You\'ve opened a modal window! Also known as: The Please Sign Up For Our Mailing List Annoyance Window.'];

  this.openModal = function() {
    $log.log('\n\n::: openModal() :::');
    $uibModal.open();
  };

  this.closeModal = function() {
    $uibModal.close();
  };
}

// from ex
// app.controller('SampleController', function($scope, ModalService) {
//
//   ModalService.showModal({
//     templateUrl: "template.html",
//     controller: "ModalController"
//   }).then(function(modal) {
//
//     //it's a bootstrap element, use 'modal' to show it
//     modal.element.modal();
//     modal.close.then(function(result) {
//       console.log(result);
//     });
//   });
//
// );

// borrowed code
// require('./_create-gallery.scss');
//
// module.exports = {
//   template: require('./create-gallery.html'),
//   controller: ['$log', 'galleryService', CreateGalleryController],
//   controllerAs: 'createGalleryCtrl'
// };
//
// function CreateGalleryController($log, galleryService) {
//   $log.debug('CreateGalleryController');
//
//   this.gallery = {};
//
//   this.createGallery = function() {
//     galleryService.createGallery(this.gallery)
//     .then( () => {
//       this.gallery.name = null;
//       this.gallery.desc = null;
//     });
//   };
// }
