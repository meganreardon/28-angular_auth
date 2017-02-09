'use strict';

require('./_a-modal.scss');

module.exports = function() {
  return {
    restrict: 'EAC',
    template: require('./a-modal.html'),
    controller: ['$log', AModalController],
    bindToController: true,
    controllerAs: 'aModalCtrl',
    scopt: {
      title: '@'
    }
  };
};

function AModalController() {
  this.stuffInModal = ['Congratulations! You\'ve opened a modal window! Also known as: The Please Sign Up For Our Mailing List Annoyance Window.'];
}
