(function (app) {
  'use strict';

  app.factory("View", function (GithubApi) {
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
        View.files = GithubApi.files(repo.contents_url).then(function (response) {
          return response.data;
        }, function () {
          return [];
        });
      } else {
        View.files = [];
      }
    };

    return View;
  });

})(angular.module('GithubBrowser'));

