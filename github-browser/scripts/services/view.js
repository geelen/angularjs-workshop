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
      this.repo = repo;
      if (repo && repo.contents_url) {
        console.log("Fetching repo...");
        $http.get(repo.contents_url.replace(/{\+path}/, "")).success(function (data) {
          View.files = data;
        })
      }
    };

    return View;
  });

})(angular.module('GithubBrowser'));

