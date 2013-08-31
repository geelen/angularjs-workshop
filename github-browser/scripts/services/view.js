(function (app) {
  'use strict';

  app.factory("View", function ($http) {
    // Private state

    // Initial values
    var View = {
      repo: undefined,
      files: []
    };

    // Function implementations
    View.updateRepo = function (repo) {
      View.repo = repo;
      if (repo && repo.contents_url) {
        View.files = $http.get(repo.contents_url.replace(/{\+path}/, ""))
          .then(function(response) {
            return response.data;
          }, function() {
            return [];
          })
      }
    };

    return View;
  });

})(angular.module('GithubBrowser'));

