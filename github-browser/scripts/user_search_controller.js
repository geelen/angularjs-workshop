(function (app) {
  'use strict';

  app.controller("UserSearchController", function ($scope, Search, $rootScope) {
    $scope.search = Search;

    $scope.selectUser = function(user) {
      Search.selectedUser = user;
    };
  });


})(angular.module('GithubBrowser'));

