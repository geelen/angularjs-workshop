(function (app) {
  'use strict';

  app.controller("RepositoryViewController", function ($scope, $http, State, View) {
    $scope.view = View;

    $scope.$watch(function() {
      return State.selectedRepo;
    }, angular.bind($scope.view, $scope.view.updateRepo));
  });


})(angular.module('GithubBrowser'));

