(function () {
  'use strict';

  var app = angular.module("GithubBrowser", [])

  // global config goes here

  app.value('LocalStorage', localStorage);

})();
