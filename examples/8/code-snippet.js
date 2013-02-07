var app = angular.module('myApp', []);

app.controller('MyCtrl', function ($scope) {

});

app.directive('snippet', function ($http) {
  return {
    restrict: 'E',
    templateUrl: 'myFile.html',
    replace: true,
    scope: true,
    link: function (scope, element, attrs) {
      $http.get(attrs.src + '?livereload=false').success(function (data) {
        scope.rawHtml = data;
      });
    }
  }
});
