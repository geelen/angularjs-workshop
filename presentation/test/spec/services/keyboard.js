'use strict';

describe('Service: Keyboard', function () {

  // load the service's module
  beforeEach(module('presentationApp'));

  // instantiate service
  var keyboard, callback;
  beforeEach(inject(function ($document) {
    spyOn($document, 'bind').andCallFake(function (cb) {
      callback = cb;
    });
  }));
  beforeEach(inject(function (Keyboard) {
    keyboard = Keyboard;
  }));

  it('should have registered the callback', function () {
    expect(!!callback).toBe(true);
  });
});
