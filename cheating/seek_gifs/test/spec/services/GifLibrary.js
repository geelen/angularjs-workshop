'use strict';

describe('Service: GifLibrary', function () {

  // load the service's module
  beforeEach(module('gifsApp'));

  // instantiate service
  var GifLibrary;
  beforeEach(inject(function(_GifLibrary_) {
    GifLibrary = _GifLibrary_;
  }));

  it('should do something', function () {
    expect(!!GifLibrary).toBe(true);
  });

});
