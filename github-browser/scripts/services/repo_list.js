(function (app) {
  'use strict';

  app.factory("RepoList", function (GithubApi) {
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
        RepoList.list = GithubApi.repos(user.username).then(function (response) {
          return response.data;
        }, function () {
          return [];
        })
      }
    };

    return RepoList;
  });


})(angular.module('GithubBrowser'));

