(function (app) {
  'use strict';

  app.factory("State", function ($rootScope, $location) {
    var State = $rootScope.$new(true);


    // read in initial location
    var updateStateFromUrl = function () {
      var urlParts = $location.path().split(/\//);
      State.username = urlParts[1];
      State.reponame = urlParts[2];
    };
    updateStateFromUrl();
    State.$on('$locationChangeSuccess', updateStateFromUrl);

    // watchUrl
    var updateLocation = function () {
      var path = "/";
      if (State.username) {
        path += State.username;
        if (State.reponame) {
          path += "/" + State.reponame;
        }
      }
      $location.path(path)
    };

    State.$watch('username', updateLocation)
    State.$watch('reponame', updateLocation)

    return State;
  });

})(angular.module('GithubBrowser'));
