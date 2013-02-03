var app = angular.module('myApp', []);

app.controller('MyCtrl', function ($scope) {
  $scope.clickedIt = function () {
    $scope.message = "You got it!"
  }
});

app.directive('runAway', function () {
  return {
    restrict: 'A',
    link: function (scope, element, attrs) {
      element.bind('mouseenter', function () {
        element.css('top', Math.random() * 90 + '%');
        element.css('left', Math.random() * 90 + '%');
      });
    }
  }
});
