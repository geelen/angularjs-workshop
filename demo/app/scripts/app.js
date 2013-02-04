'use strict';

var demoApp = angular.module('demoApp', [])
  .config(function($routeProvider) {
    $routeProvider
      .when('/:slideNr', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
