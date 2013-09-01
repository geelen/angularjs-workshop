'use strict';

describe('Service: Search', function () {

  // load the service's module
  beforeEach(module('GithubBrowser'));

  // instantiate service
  var Search, GithubApi;

  beforeEach(module(function ($provide) {
    GithubApi = jasmine.createSpyObj("GithubApi", ["search"])
    $provide.value('GithubApi', GithubApi);
  }));

  beforeEach(inject(function (_Search_) {
    Search = _Search_;
  }));

  it('should do a search', inject(function ($rootScope, $q) {
    Search.term = "githubber";
    var deferred = $q.defer();

    // Trigger the search
    GithubApi.search.andReturn(deferred.promise);
    Search.go();
    expect(GithubApi.search).toHaveBeenCalledWith("githubber");

    // Send the data back from the API
    deferred.resolve({
      data: {
        users: [1, 2, 3]
      }
    });

    // Pull the data out of the promise
    // (Angular's view does this automatically)
    var users;
    Search.users.then(function (val) {
      users = val;
    });

    // Resolve the promises
    $rootScope.$apply();
    expect(users).toEqual([1, 2, 3])
  }));
});
