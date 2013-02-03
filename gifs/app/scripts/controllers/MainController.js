'use strict';

gifsApp.controller('MainController', function ($scope, $http, Fetcher) {

  Fetcher.fetch().then(function (gifs) {
    $scope.currentGif = gifs[Math.floor(Math.random() * gifs.length)]
  });

});
