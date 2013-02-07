var TabController = function($scope) {
  $scope.currentTab = 1;

  $scope.activeTabOne = 'active';
  $scope.activeTab = function (tabNr) {
    return { active: tabNr === $scope.currentTab };
  }

  $scope.switchToTab = function (tabNr) {
    $scope.currentTab = tabNr;
  }
};
