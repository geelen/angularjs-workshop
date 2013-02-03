'use strict';

gifsApp.controller('MainController', function ($scope, $http, $timeout, Fetcher) {
  var allGifs = [];
  $scope.currentGif = 'http://project.wnyc.org/elections/patchwork-vote-co/images/spinner.gif';

  var chooseRandomGif = function() {
    console.log("choosing!")
    $scope.currentGif = allGifs[Math.floor(Math.random() * allGifs.length)];
    $timeout(chooseRandomGif, 1000);
  };

  Fetcher.fetch().then(function (gifs) {
    allGifs = gifs;
    chooseRandomGif();
  });
});
