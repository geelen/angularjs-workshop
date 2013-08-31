(function (app) {
  'use strict';

  app.controller("BodyController", function ($scope) {
    $scope.me = {};

    $scope.selectUser = function(user) {
      $scope.selectedUser = user;
    };
  });


})(angular.module('GithubBrowser'));

