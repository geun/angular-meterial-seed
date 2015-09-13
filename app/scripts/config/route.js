'use strict';

angular.module('plipApiAdminApp')
  .constant('routeName', {
    ROOT: 'root',
    INDEX: 'index',
    APPS: 'apps',
    DASHBOARD: 'apps.dashboard'
  });

angular.module('plipApiAdminApp')
  .config(function (routeName, $routeProvider, $stateProvider, $urlRouterProvider) {

    var app_view_path, view_path;
    view_path = '/views/';
    app_view_path = '/views/pages/';


    $urlRouterProvider.otherwise('/dashboard');

    $stateProvider
      .state(routeName.APPS, {
        abstract: true,
        views: {
          '': {
            controller: 'AppCtrl',
            templateUrl: view_path + 'layouts/application.html'
          },
          'navigation': {
            controller: 'MainNavigationCtrl',
            templateUrl: view_path + 'layouts/navigation.html'
          }
        }
      })
      .state(routeName.DASHBOARD, {
        url: '/dashboard',
        views: {
          '':{
            templateUrl: app_view_path + 'dashboard.html',
            controller: 'DashboardCtrl'
          }
        }
      });
  });
