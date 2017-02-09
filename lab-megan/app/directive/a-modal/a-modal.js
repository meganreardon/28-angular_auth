'use strict';

require('./_a-modal.scss');

module.exports = function() {
  return {
    restrict: 'EAC',
    template: require('./a-modal.html'),
    controller: ['$q', '$log', '$uibModal', AModalController],
    bindToController: true,
    controllerAs: 'aModalCtrl',
    scope: {
      title: '@'
    }
  };
};

function AModalController($q, $log, $uibModal) {
  $log.debug('AModalController');

  this.openModal = function() {
    $log.log('openModal()');
    $uibModal.open({
      templateUrl: 'aModalContent.html'
    });
  };

  this.closeModal = function() {
    $log.log('closeModal()');
    $uibModal.close();
  };
}
