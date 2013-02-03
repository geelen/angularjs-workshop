'use strict';

gifsApp.controller('HeaderController', function($scope, $rootScope) {
  $scope.addTumblr = function() {
    $rootScope.$broadcast('tumblrAdded', $scope.submission);
  };
});
