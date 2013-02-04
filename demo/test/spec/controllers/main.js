'use strict';

describe('Controller: MainCtrl', function() {

  // load the controller's module
  beforeEach(module('demoApp'));

  var MainCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($controller) {
    scope = {};
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('should start on slide 1', function() {
    expect(scope.currentSlide).toBe(1);
  });

  it('should move forward and back', function() {
    scope.goNext();
    scope.goNext();
    expect(scope.currentSlide).toBe(3);
    scope.goPrev();
    expect(scope.currentSlide).toBe(2);
  });
});
