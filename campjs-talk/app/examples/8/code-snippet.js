var app = angular.module('myApp', []);

app.controller('MyCtrl', function ($scope) {
  $scope.message = "Hi!";
});

app.directive('snippet', function ($http) {
  return {
    restrict: 'E',
    template: "<div>\n  <pre><code data-language='{{lang}}' ng-bind='content'></code></pre>\n  <iframe src='{{ url }}'></iframe>\n</div>",
    replace: true,
    scope: {
      lang: '@'
    },
    link: function (scope, element, attrs) {
      $http.get(attrs.src + "?livereload=false").success(function (data) {
        scope.content = data;
      })
    }
  }
});
