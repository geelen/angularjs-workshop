(function (app) {
  'use strict';

  app.factory("Search", function ($http) {
    return  {
      go: function () {
        $http.get("https://api.github.com/legacy/user/search/" + this.term)
          .success(angular.bind(this, function (response) {
            this.users = response.users;
          }));

        console.log("Searching...");
      }
    };
  });

})(angular.module('GithubBrowser'));

