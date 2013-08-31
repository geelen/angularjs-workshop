(function () {
  'use strict';

  var app = angular.module("GithubBrowser", [])

  // global config goes here
  app.config(function($httpProvider) {
    $httpProvider.defaults.headers.common.Authorization = "token 8e0e97fe6cfc172a1d640dac677255008e8ee73d";
  });

  app.value('LocalStorage', localStorage);

})();
