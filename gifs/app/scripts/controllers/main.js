'use strict';

gifsApp.controller('MainCtrl', function($scope, $http, Fetcher) {
  $scope.gifs = [];

  Fetcher.fetch('dvdp').then(function (gifs) {
    $scope.gifs = $scope.gifs.concat(gifs);
  });
  Fetcher.fetch('simpsonsgifs').then(function (gifs) {
    $scope.gifs = $scope.gifs.concat(gifs);
  });
});
