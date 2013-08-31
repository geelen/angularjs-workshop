(function (app) {
  'use strict';

  app.controller("FormController", function ($scope) {
    $scope.reset = function () {
      $scope.me.name = "";
    }
  });

})(angular.module('GithubBrowser'));
