(function (app) {
  'use strict';

  app.controller("RepositoryViewController", function ($scope, $http, State, View) {
    $scope.view = View;
  });


})(angular.module('GithubBrowser'));

