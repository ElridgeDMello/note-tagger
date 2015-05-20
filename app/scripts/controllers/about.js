'use strict';

/**
 * @ngdoc function
 * @name noteTaggerApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the noteTaggerApp
 */
angular.module('noteTaggerApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
