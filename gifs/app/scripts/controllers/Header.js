'use strict';

gifsApp.controller('HeaderController', function($scope, $rootScope, Tumblrs) {
  $scope.tumblrs = Tumblrs.currentSet;
  $scope.addTumblr = function() {
    $scope.tumblrs.push($scope.submission);
  };
});
