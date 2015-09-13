'use strict';

/**
 * @ngdoc function
 * @name plipApiAdminApp.controller:AppCtrl
 * @description
 * # AppCtrl
 * Controller of the plipApiAdminApp
 */
angular.module('plipApiAdminApp')
  .controller('AppCtrl', function ($scope, $mdSidenav, $log) {
    $scope.$log = $log;

    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

  });
