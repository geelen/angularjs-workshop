(function (app) {
  'use strict';

  app.controller("RepositoryListController", function ($scope, $http) {
    $scope.$on('USER WAS SELECTED', function(event, user) {
      $scope.selectedUser = user;
      // fetch repositories, etc
    });
  });


})(angular.module('GithubBrowser'));

