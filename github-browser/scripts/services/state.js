(function (app) {
  'use strict';

  app.factory("State", function ($rootScope) {
    var State = $rootScope.$new(true);

    return State;
  });

})(angular.module('GithubBrowser'));
