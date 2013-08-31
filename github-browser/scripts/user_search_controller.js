(function (app) {
  'use strict';

  app.controller("UserSearchController", function ($scope, Search, $rootScope) {
    $scope.search = Search;

    $scope.selectUser = function(user) {
      $rootScope.$broadcast("USER WAS SELECTED", user);
    };
  });


})(angular.module('GithubBrowser'));

