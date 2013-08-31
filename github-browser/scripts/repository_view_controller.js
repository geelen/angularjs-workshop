(function (app) {
  'use strict';

  app.controller("RepositoryViewController", function ($scope, $http, State) {
    $scope.view = {
      updateRepo: function(repo) {
        this.repo = repo;
        if (repo && repo.contents_url) {
          console.log("Fetching repo...");
          $http.get(repo.contents_url.replace(/{\+path}/,"")).success(function(data) {
            console.log(data);
          })
        }
      }
    }

    $scope.$watch(function() {
      return State.selectedRepo;
    }, angular.bind($scope.view, $scope.view.updateRepo));
  });


})(angular.module('GithubBrowser'));

