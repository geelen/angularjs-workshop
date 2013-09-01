(function (app) {
  'use strict';

  app.factory("GithubApi", function ($http) {
    var GithubApi = {
      search: function(term) {
        return $http.get("https://api.github.com/legacy/user/search/" + term);
      },
      repos: function(username) {
        return $http.get("https://api.github.com/users/" + username + "/repos");
      }
    }

    return GithubApi;
  });


})(angular.module('GithubBrowser'));

