var app = angular.module('twitterFilters', []);
app.controller('TwitterController', function ($scope, $http) {
  $scope.submitSearch = function () {
    $http.jsonp(
      "http://search.twitter.com/search.json?q=" +
        $scope.searchTerm +
        '&callback=JSON_CALLBACK'
    ).success(function (data) {
        $scope.results = data.results;
      })
  };
  $scope.searchTerm = 'angularjs';
  $scope.submitSearch();
});

app.filter('toDate', function () {
  return function (dateString) {
    return new Date(dateString);
  };
});

app.filter('timeAgo', function () {
  return function (dateString) {
    return (new Date - new Date(dateString)) / (60 * 1000);
  };
});











