(function (app) {
  'use strict';

  app.controller("UserSearchController", function ($scope, $http, $rootScope) {
    $scope.search = {
      go: function() {
        $http.get("https://api.github.com/legacy/user/search/" + this.term)
          .success(angular.bind(this, function(response) {
            this.users = response.users;
          }));

        console.log("Searching...");
      }
    };

    $scope.selectUser = function(user) {
      $rootScope.$broadcast("USER WAS SELECTED", user);
    };
  });


})(angular.module('GithubBrowser'));

