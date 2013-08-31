(function (app) {
  'use strict';

  app.controller("RepositoryListController", function ($scope, $http, State) {
    $scope.$watch(function() {
      return State.selectedUser;
    }, function(newVal) {
      $scope.selectedUser = newVal;
    });
  });


})(angular.module('GithubBrowser'));

