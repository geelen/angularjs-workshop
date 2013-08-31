(function (app) {
  'use strict';

  app.factory("Search", function ($http) {
    // Private state
    var githubSearchUrl = "https://api.github.com/legacy/user/search/";

    // Initial values
    var Search = {
      users: [],
      term: ''
    };

    // Function implementations
    Search.go = function () {
      Search.users = null;
      $http.get(githubSearchUrl + Search.term)
        .success(function (response) {
          Search.users = response.users;
        }).error(function() {
          Search.users = [];
        });
    };

    return Search;
  });

})(angular.module('GithubBrowser'));

