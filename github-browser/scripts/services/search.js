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
      Search.users = $http.get(githubSearchUrl + Search.term)
        .then(function (response) {
          return response.data.users;
        }, function() {
          return [];
        });
    };

    return Search;
  });

})(angular.module('GithubBrowser'));

