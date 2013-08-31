(function (app) {
  'use strict';

  app.controller("RepositoryListController", function ($scope, $http, RepoList, State) {
    $scope.filterTerm = '';
    $scope.repos = RepoList;

    $scope.selectRepo = function (repo) {
      State.selectedRepo = repo;
    };

    State.$watch('selectedUser', RepoList.updateUser);
  });


})(angular.module('GithubBrowser'));

