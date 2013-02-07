var app = angular.module('myApp', []);

app.controller('MyCtrl', function ($scope) {
  $scope.clickedIt = function () {
    $scope.message = "You clicked it!"
  }
});

app.directive('runAway', function () {
  return function (scope, element, attrs) {
    element.bind('mouseenter', function () {
      element.css('top', Math.random() * 90 + '%');
      element.css('left', Math.random() * 90 + '%');
    })
  }
});
