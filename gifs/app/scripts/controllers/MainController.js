'use strict';

gifsApp.controller('MainController',
  function ($scope, $http, $timeout, Fetcher, RandomChooser, Tumblrs) {
    var allGifs = [];
    $scope.currentGif = 'http://project.wnyc.org/elections/patchwork-vote-co/images/spinner.gif';
    $scope.tumblrs = Tumblrs.currentSet;

    $scope.$watch('tumblrs.length', function () {
      $scope.tumblrs.forEach(function (t) {
        Fetcher.fetch(t).then(function (newGifs) {
          Tumblrs.allGifs = Tumblrs.allGifs.concat(newGifs);
        });
      });
    });

    RandomChooser.chooseRandomly(function (newGif) {
      if (newGif) $scope.currentGif = newGif;
    });

    $scope.$on('tumblrAdded', function (evt, newTumblr) {
      console.log('Main got ' + newTumblr);
    })
  });
