(function (app) {
  'use strict';

  app.controller("RepositoryListController", function ($scope, $http, RepoList, State) {
    $scope.filterTerm = '';
    $scope.repos = RepoList;

    $scope.selectRepo = function (repo) {
      State.reponame = repo.name;
      State.selectedRepo = repo;
    };

    State.$watch('selectedUser', RepoList.updateUser);

    var autoSelectRepo = function () {
      if (RepoList.list.then && (!State.selectedRepo || State.reponame != State.selectedRepo.name)) {
        if (State.reponame) {
          RepoList.list.then(function(repos) {
            angular.forEach(repos, function (repo) {
              if (repo && repo.name === State.reponame) $scope.selectRepo(repo);
            });
          });
        } else {
          State.selectedRepo = undefined;
        }
      }
    };
    State.$watch('reponame', autoSelectRepo);
    $scope.$watch('repos.list.length', autoSelectRepo);
  });


})(angular.module('GithubBrowser'));

