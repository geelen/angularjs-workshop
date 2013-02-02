var app = angular.module('myApp', []);

app.controller('MyCtrl', function ($scope) {
  $scope.clicked = function() {
    $scope.message = "You got it!";
  }
});

app.directive('runaway', function() {
  return function (scope, element, attrs) {
    element.bind('mouseenter', function() {
      element.css('left', Math.random() * 90 + '%');
      element.css('top', Math.random() * 90 + '%');
    });
  };
})
