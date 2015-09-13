'use strict';

/**
 * @ngdoc function
 * @name plipApiAdminApp.controller:ApplicationCtrl
 * @description
 * # ApplicationCtrl
 * Controller of the plipApiAdminApp
 */
angular.module('plipApiAdminApp')
  .controller('ApplicationCtrl', function ($scope, $log, $mdSidenav, $mdUtil) {

    $scope.$log = $log;
    $log.debug('ApplicationCtrl');

    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.toggleSideNav = function(menuId) {
      $mdSidenav(menuId)
        .toggle()
        .then(function () {
          $log.debug('toggle ' + menuId + ' is done');
        });
    };
  });
