var TwitterController = function ($scope, $http) {
  $scope.performSearch = function () {
    $scope.inProgress = true;
    $http.jsonp('http://search.twitter.com/search.json?q=' +
      $scope.searchTerm + '&callback=JSON_CALLBACK')
      .success(function (data) {
        $scope.inProgress = false;
        $scope.data = data;
      })
  }
};
