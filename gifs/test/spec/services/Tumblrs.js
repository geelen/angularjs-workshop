'use strict';

describe('Service: Tumblrs', function () {

  // load the service's module
  beforeEach(module('gifsApp'));

  // instantiate service
  var Tumblrs;
  beforeEach(inject(function(_Tumblrs_) {
    Tumblrs = _Tumblrs_;
  }));

  it('should do something', function () {
    expect(!!Tumblrs).toBe(true);
  });

});
