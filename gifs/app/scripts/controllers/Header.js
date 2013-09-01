'use strict';

gifsApp.controller('HeaderCtrl', function($scope, GifLibrary) {
  $scope.addGifs = function() {
    GifLibrary.addGifs($scope.newTumblrName);
  };
});
