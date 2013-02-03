var TabController = function($scope) {
  var selectedTab = 1;

  $scope.tabClass = function (tabNr) {
    return { active: tabNr == selectedTab };
  };

  $scope.selectTab = function(tabNr) {
    selectedTab = tabNr;
  }
};
