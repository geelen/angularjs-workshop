'use strict';

gifsApp.controller('HeaderCtrl', function($scope, $rootScope, GifLibrary) {
  $scope.addTumblr = function () {
    GifLibrary.addTumblr($scope.tumblrName);
  }
});
