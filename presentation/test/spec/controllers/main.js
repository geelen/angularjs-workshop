'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('presentationApp'));

  var scope, location, keyboard, invokeMainCtrl;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller) {
    scope = {};
    location = jasmine.createSpyObj('location', ['hash']);
    keyboard = jasmine.createSpyObj('keyboard', ['on']);
    invokeMainCtrl = function() {
      $controller('MainCtrl', { $scope: scope, $location: location, Keyboard: keyboard });
    }
  }));

  it("should default to slide 1.0", function() {
    invokeMainCtrl();
    expect(scope.currentSlide).toBe(1.0);
    expect(location.hash).toHaveBeenCalledWith('1.0');
  });

  it("should set the currentSlide with what's in the URL", function() {
    location.hash.andReturn('2.1');
    invokeMainCtrl();
    expect(scope.currentSlide).toBe(2.1);
    expect(location.hash).toHaveBeenCalledWith('2.1');
  });

  it("should set the currentSlide and the URL to 1 decimal place", function() {
    location.hash.andReturn('2.300001');
    invokeMainCtrl();
    expect(scope.currentSlide).toBe(2.3);
    expect(location.hash).toHaveBeenCalledWith('2.3');
  });

  it("should change to the next slide on the right key", function () {
    var rightCb;
    keyboard.on.andCallFake(function (key, cb) {
      if (key === 'Right') rightCb = cb;
    });
    invokeMainCtrl();

    expect(!!rightCb).toBe(true);
    rightCb();
    expect(scope.currentSlide).toBe(2.0);
    scope.currentSlide = 3.8;
    rightCb();
    expect(scope.currentSlide).toBe(4.0);
  });

  it("should change to the previous slide on the left key", function () {
    var leftCb;
    keyboard.on.andCallFake(function (key, cb) {
      if (key === 'Left') leftCb = cb;
    });
    invokeMainCtrl();
    expect(!!leftCb).toBe(true);

    scope.currentSlide = 3.8;
    leftCb();
    expect(scope.currentSlide).toBe(2.0);
    leftCb();
    expect(scope.currentSlide).toBe(1.0);
  });

  it("should increment by a tenth on down", function () {
    var downCb;
    keyboard.on.andCallFake(function (key, cb) {
      if (key === 'Down') downCb = cb;
    });
    invokeMainCtrl();
    expect(!!downCb).toBe(true);

    scope.currentSlide = 3.8;
    downCb();
    expect(scope.currentSlide).toBe(3.9);
    downCb();
    expect(scope.currentSlide).toBe(4.0);
  });

  it("should decrememt by a tenth on up", function () {
    var upCb;
    keyboard.on.andCallFake(function (key, cb) {
      if (key === 'Up') upCb = cb;
    });
    invokeMainCtrl();
    expect(!!upCb).toBe(true);

    scope.currentSlide = 3.8;
    upCb();
    expect(scope.currentSlide).toBe(3.7);
    upCb();
    expect(scope.currentSlide).toBe(3.6);
  });
});
