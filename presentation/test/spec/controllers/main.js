'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('presentationApp'));

  var scope, location, invokeMainCtrl;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller) {
    scope = {};
    location = jasmine.createSpyObj('location', ['hash']);
    invokeMainCtrl = function() {
      $controller('MainCtrl', { $scope: scope, $location: location });
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
});
