'use strict';

describe('Service: Search', function () {

  // load the service's module
  beforeEach(module('GithubBrowser'));

  // instantiate service
  var Search;
  beforeEach(inject(function (_Search_) {
    Search = _Search_;
  }));

  it('should do a search', inject(function ($httpBackend, $rootScope) {
    Search.term = "githubber";

    $httpBackend.expectGET("https://api.github.com/legacy/user/search/" + Search.term)
      .respond({
        users: [1, 2, 3]
      });
    Search.go();

    // Our view transparently calls this
    Search.users.then(function (users) {
      expect(users).toEqual([1, 2, 3]);
    });
  }));
});
