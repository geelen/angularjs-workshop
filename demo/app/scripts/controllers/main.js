'use strict';

demoApp.controller('MainCtrl', function($scope, $timeout) {
  $scope.message = "Hi!";
  $scope.currentSlide = 1;

  $scope.goNext = function () {
    $scope.currentSlide++;
  }

  $scope.goPrev = function () {
    $scope.currentSlide--;
  }
});
