(function (app) {
  'use strict';

  app.controller("FormController", function ($scope, LocalStorage) {
    // Private state
    var localStorageBucket = 'github-browser__me.name';

    // Setup tasks
    if (!$scope.me.name) {
      $scope.me.name = LocalStorage.getItem(localStorageBucket)
    }

    // Watchers
    $scope.$watch('me.name', function (newVal) {
      LocalStorage.setItem(localStorageBucket, newVal);
    });

    // Public API
    $scope.reset = function () {
      $scope.me.name = "";
    }
  });


})(angular.module('GithubBrowser'));

