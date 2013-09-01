'use strict';

presoApp.controller('MainCtrl', function($scope) {
  $scope.currentSlide = 1;
  $scope.nextSlide = function() {
    $scope.currentSlide++;
  };
  $scope.prevSlide = function() {
    $scope.currentSlide--;
  };
});
