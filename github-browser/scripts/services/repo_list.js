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
      RepoList.selectedUser = user;
      if (user) {
        RepoList.list = null;
        $http.get("https://api.github.com/users/" + user.username + "/repos")
          .success(function (data) {
            RepoList.list = data;
          })
          .error(function(data) {
            RepoList.list = [];
          })
      }
    };

    return RepoList;
  });


})(angular.module('GithubBrowser'));

