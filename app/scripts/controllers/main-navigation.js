'use strict';

/**
 * @ngdoc function
 * @name adminApp.controller:MainNavigationCtrl
 * @description
 * # MainNavigationCtrl
 * Controller of the adminApp
 */
angular.module('plipApiAdminApp')
  .controller('MainNavigationCtrl', function ($scope, $state, $mdSidenav) {

    $scope.navigate = function(targetState){
      $state.go(targetState);
      $mdSidenav('left')
        .close()
        .then(function () {

        });
    };

    $scope.dashboard = [
      {
        state: 'apps.dashboard',
        title: 'Dashboard',
        icon: 'fa-tachometer'
      }
    ];

  });
