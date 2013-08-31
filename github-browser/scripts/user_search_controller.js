(function (app) {
  'use strict';

  app.controller("UserSearchController", function ($scope, Search, State) {
    $scope.search = Search;

    $scope.selectUser = function(user) {
      State.selectedUser = user;
    };
  });


})(angular.module('GithubBrowser'));

