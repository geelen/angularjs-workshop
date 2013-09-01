(function (app) {
  'use strict';

  app.controller("RepositoryViewController", function ($scope, $http, State, View) {
    $scope.view = View;

    State.$watch('selectedRepo', View.updateRepo);
  });


})(angular.module('GithubBrowser'));

