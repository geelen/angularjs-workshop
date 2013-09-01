(function (app) {
  'use strict';

  app.controller("UserSearchController", function ($scope, Search, State) {
    $scope.search = Search;

    $scope.selectUser = function (user) {
      State.username = user.username;
      State.selectedUser = user;
    };

    State.$watch('username', function (username) {
      if (username && (!State.selectedUser || username != State.selectedUser.username)) {
        Search.term = username;
        Search.go();
        Search.users.then(function (matchedUsers) {
          angular.forEach(matchedUsers, function (user) {
            if (user.username === username) $scope.selectUser(user);
          });
        })
      }
    })
  });


})(angular.module('GithubBrowser'));

