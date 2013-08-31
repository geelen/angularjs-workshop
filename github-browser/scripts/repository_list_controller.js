(function (app) {
  'use strict';

  app.controller("RepositoryListController", function ($scope, $http, State) {
    $scope.repos = {
      updateUser: function(user) {
        this.selectedUser = user;
        if (user) {
          console.log("Searching for repos...");
          $http.get("https://api.github.com/users/" + user.username + "/repos")
            .success(angular.bind(this, function(data) {
              this.list = data;
            }));
        }
      }
    };

    $scope.$watch(function() {
      return State.selectedUser;
    }, angular.bind($scope.repos, $scope.repos.updateUser));
  });


})(angular.module('GithubBrowser'));

