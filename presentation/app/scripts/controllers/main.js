'use strict';

presentationApp.controller('MainCtrl', function ($scope, $location, Keyboard) {
  var setCurrentSlide = function (nr) {
    var ohGodJavascriptReally = nr.toFixed(1);
    $location.hash(ohGodJavascriptReally);
    $scope.currentSlide = parseFloat(ohGodJavascriptReally);
  };
  setCurrentSlide(parseFloat($location.hash()) || 1);

  Keyboard.on("Right", function() {
    setCurrentSlide(Math.floor($scope.currentSlide + 1));
  });
  Keyboard.on("Left", function() {
    setCurrentSlide(Math.floor($scope.currentSlide - 1));
  });
  Keyboard.on("Down", function() {
    setCurrentSlide($scope.currentSlide + 0.1);
  });
  Keyboard.on("Up", function() {
    setCurrentSlide($scope.currentSlide - 0.1);
  });

  $scope.clickNext = function() {
    setCurrentSlide(Math.floor($scope.currentSlide + 1) + 0.9);
  }
  $scope.clickPrev = function() {
    setCurrentSlide(Math.floor($scope.currentSlide - 1) + 0.9);
  }
});
