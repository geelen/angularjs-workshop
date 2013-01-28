'use strict';

presentationApp.controller('MainCtrl', function ($scope, $location) {
  $scope.currentSlide = 1;
  var setCurrentSlide = function (nr) {
    var ohGodJavascriptReally = nr.toFixed(1);
    $location.hash(ohGodJavascriptReally);
    return $scope.currentSlide = parseFloat(ohGodJavascriptReally);
  };
  setCurrentSlide(parseFloat($location.hash()) || 1);
});
