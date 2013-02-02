var app = angular.module('myApp', []);

app.controller('MyCtrl', function ($scope) {
  $scope.clicked = function() {
    $scope.message = "You got it!";
  }
});
