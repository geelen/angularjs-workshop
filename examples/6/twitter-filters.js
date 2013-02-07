var app = angular.module('twitterFilters', []);
app.controller('TwitterController', function ($scope, $http) {
  $http.jsonp('http://search.twitter.com/search.json?q=' +
    'angularjs' + '&callback=JSON_CALLBACK')
    .success(function (data) {
      $scope.data = data;
    })

  $scope.date = new Date();
});

app.filter('toDate', function () {
  return function (dateString) {
    return new Date(dateString);
  }
});

app.filter('timeAgo', function () {
  return function(dateString) {
    return (new Date() - new Date(dateString)) / (1000 * 60);
  }
})
