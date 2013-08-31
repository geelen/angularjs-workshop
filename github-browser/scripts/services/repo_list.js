(function (app) {
  'use strict';

  app.factory("RepoList", function ($http) {
    // Private state

    // Initial values
    var RepoList = {
      selectedUser: undefined,
      list: []
    };

    // Function implementations
    RepoList.updateUser = function (user) {
      this.selectedUser = user;
      if (user) {
        console.log("Searching for repos...");
        $http.get("https://api.github.com/users/" + user.username + "/repos")
          .success(function (data) {
            RepoList.list = data;
          });
      }
    };

    return RepoList;
  });


})(angular.module('GithubBrowser'));

