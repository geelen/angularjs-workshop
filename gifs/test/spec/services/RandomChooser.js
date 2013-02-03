'use strict';

describe('Service: RandomChooser', function () {

  // load the service's module
  beforeEach(module('gifsApp'));

  // instantiate service
  var RandomChooser;
  beforeEach(inject(function(_RandomChooser_) {
    RandomChooser = _RandomChooser_;
  }));

  it('should do something', function () {
    expect(!!RandomChooser).toBe(true);
  });

});
