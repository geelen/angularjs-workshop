(function (app) {
  'use strict';

  app.controller("UserSearchController", function ($scope, $http) {
    $scope.search = {
      go: function() {
        $http.get("https://api.github.com/legacy/user/search/" + this.term)
          .success(function(response) {
            console.log(response.users);
          })
        console.log("Searching...");
      }
    }
  });


})(angular.module('GithubBrowser'));

