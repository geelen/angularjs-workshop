'use strict';

var presentationApp = angular.module('presentationApp', [])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/slides', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        reloadOnSearch: false
      })
      .otherwise({
        redirectTo: '/slides'
      });
  });
