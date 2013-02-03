'use strict';

gifsApp.controller('MainController',
  function ($scope, $http, $timeout, Fetcher, RandomChooser) {
    var allGifs = [];
    $scope.currentGif = 'http://project.wnyc.org/elections/patchwork-vote-co/images/spinner.gif';

    Fetcher.fetch().then(function (gifs) {
      allGifs = gifs;
      RandomChooser.chooseRandomly(allGifs, function (newGif) {
        $scope.currentGif = newGif;
      });
    });
  });
