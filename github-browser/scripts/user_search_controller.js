(function (app) {
  'use strict';

  app.controller("UserSearchController", function ($scope, $http) {
    $scope.search = {
      go: function() {
        $http.get("https://api.github.com/legacy/user/search/" + this.term)
          .success(angular.bind(this, function(response) {
            this.users = response.users;
          }));

        console.log("Searching...");
      }
    }
  });


})(angular.module('GithubBrowser'));

