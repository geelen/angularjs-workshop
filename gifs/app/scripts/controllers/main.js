'use strict';

gifsApp.controller('MainCtrl', function ($scope, GifLibrary) {
  $scope.gifs = GifLibrary.allGifs;
  GifLibrary.addGifs('dvdp');
});
