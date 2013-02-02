var TabController = function($scope) {
  $scope.currentTab = 1;

  $scope.tabSelected = function(index) {
    return index === $scope.currentTab;
  };

  $scope.selectTab = function(index) {
    $scope.currentTab = index;
  }
};
