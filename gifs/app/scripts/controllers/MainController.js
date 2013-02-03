'use strict';

gifsApp.controller('MainController', function ($scope, $http, Fetcher) {
  var allGifs = ['http://project.wnyc.org/elections/patchwork-vote-co/images/spinner.gif'];

  var chooseRandomGif = function() {
    $scope.currentGif = allGifs[Math.floor(Math.random() * allGifs.length)]
  };
  chooseRandomGif();

  Fetcher.fetch().then(function (gifs) {
    allGifs = gifs;
    chooseRandomGif();
  });
});
