(function (app) {
  'use strict';

  app.factory("GithubApi", function ($http) {
    // Private API
    var githubGet = function(url) {
      return $http.get(url, {
        headers: {
          Authorization: "token 8e0e97fe6cfc172a1d640dac677255008e8ee73d"
        }
      });
    };

    // Public API
    return {
      search: function (term) {
        return githubGet("https://api.github.com/legacy/user/search/" + term);
      },
      repos: function (username) {
        return githubGet("https://api.github.com/users/" + username + "/repos");
      }
    };
  });


})(angular.module('GithubBrowser'));

