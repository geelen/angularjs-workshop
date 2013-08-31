(function (app) {
  'use strict';

  app.controller("RepositoryViewController", function ($scope, $http, State, View) {
    $scope.view = View;

    $scope.$watch(function() {
      return State.selectedRepo;
    }, View.updateRepo);
  });


})(angular.module('GithubBrowser'));

