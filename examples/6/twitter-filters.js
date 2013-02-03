var app = angular.module('twitterFilters', []);

app.controller('TwitterController', function ($scope, $http) {
  $scope.search = function () {
    $http.jsonp(
      "http://search.twitter.com/search.json?q=" +
      $scope.searchTerm +
      "&callback=JSON_CALLBACK"
    ).success(function (data) {
      $scope.results = data.results;
    });
  }

  $scope.searchTerm = 'angularjs';
  $scope.search();
});

app.filter('parseDate', function() {
  return function(input) {
    return new Date(input);
  };
});

app.filter('timeAgo', function() {
  return function(input) {
    return (new Date - new Date(input)) / (60 * 1000);
  };
});
