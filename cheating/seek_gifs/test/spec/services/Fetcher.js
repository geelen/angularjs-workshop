'use strict';

describe('Service: Fetcher', function () {

  // load the service's module
  beforeEach(module('gifsApp'));

  // instantiate service
  var Fetcher;
  beforeEach(inject(function(_Fetcher_) {
    Fetcher = _Fetcher_;
  }));

  it('should do something', function () {
    expect(!!Fetcher).toBe(true);
  });

});
