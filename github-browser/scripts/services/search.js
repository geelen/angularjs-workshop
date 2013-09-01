(function (app) {
  'use strict';

  app.factory("Search", function (GithubApi) {
    // Private state
    // Initial values
    var Search = {
      users: [],
      term: ''
    };

    // Function implementations
    Search.go = function () {
      Search.users = GithubApi.search(this.term).then(function (response) {
        return response.data.users;
      }, function () {
        return [];
      });
      window.searchUsers = Search.users
    };

    return Search;
  });

})(angular.module('GithubBrowser'));

