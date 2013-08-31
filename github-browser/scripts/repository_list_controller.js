(function (app) {
  'use strict';

  app.controller("RepositoryListController", function ($scope, $http, Search) {
    $scope.search = Search;
  });


})(angular.module('GithubBrowser'));

