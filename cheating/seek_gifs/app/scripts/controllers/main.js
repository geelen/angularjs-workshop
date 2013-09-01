'use strict';

(function (gifsApp) {

  gifsApp.controller('MainCtrl', function ($scope, $http, GifLibrary, $document) {
    $scope.gifs = [];

    GifLibrary.addTumblr('dvdp');
    $scope.gifs = GifLibrary.allGifs;

  })

})(angular.module('gifsApp'));
