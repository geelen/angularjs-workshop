'use strict';

describe('Service: Keyboard', function () {

  // load the service's module
  beforeEach(module('presentationApp'));

  // instantiate service
  var keyboard, callback;
  beforeEach(inject(function ($document) {
    spyOn($document, 'bind').andCallFake(function (event, cb) {
      if (event === 'keydown')
        callback = cb;
    });
  }));
  beforeEach(inject(function (Keyboard) {
    keyboard = Keyboard;
  }));

  it('should have registered the callback', function () {
    expect(!!callback).toBe(true);
  });

  it('should provide a nicer api into key events', function () {
    var rightCb = jasmine.createSpy('rightCb');
    keyboard.on('Right', rightCb);
    callback({keyIdentifier: 'Right'});
    expect(rightCb).toHaveBeenCalled();
  });
});
