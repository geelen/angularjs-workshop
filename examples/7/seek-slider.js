var app = angular.module('seekSlider', []);

app.controller('SeekController', function ($scope) {
  $scope.minSalary = 0;
  $scope.maxSalary = 200;
});

app.directive('grabMe', function() {
  return function(scope, element, attr) {
    var originalX, dragging = false;
      window.fullWidth = element;
    console.log(element)
    element.bind('mousedown', function(e) {
      dragging = true;
      originalX = e.offsetX;
    });
    element.bind('mousemove', function(e) {
      if (dragging)
        console.log(e.offsetX - originalX);
    });
    element.bind('mouseup', function() {
      dragging = false;
    });
  }
});
