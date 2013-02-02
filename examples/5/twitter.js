var TwitterController = function($scope, $http) {
  $http.jsonp("http://search.twitter.com/search.json?q=seek&callback=JSON_CALLBACK").success(function(data) {
    $scope.results = data.results;
  });
};
