'use strict';

module.exports = function() {
  return {
    restrict: 'EAC',
    template: require('./filters-demo.html'),
    controller: ['$log', FiltersDemoController],
    bindToController: true,
    controllerAs: 'filtersDemoCtrl',
    scopt: {
      title: '@'
    }
  };
};

function FiltersDemoController() {
  this.stuffToFilter = [1, 2, 3, 'apple', 'banana', 'carrot'];
  this.stuffToReverse = [
    {name: 'Debby', age: 34},
    {name: 'Emma', age: 56},
    {name: 'Carol', age: 14},
    {name: 'Amy', age: 3},
    {name: 'Betty', age: 89}
  ];
}
