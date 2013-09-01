'use strict';

describe('Controller: MainCtrl', function() {

  // load the controller's module
  beforeEach(module('presoApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($controller) {
    scope = {};
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('should default to slide 1', function() {
    expect(scope.currentSlide).toBe(1);
  });

  it('should increment the slide', function() {
    scope.nextSlide();
    expect(scope.currentSlide).toBe(2);
  });

  it('should decrement the slide', function() {
    scope.prevSlide();
    expect(scope.currentSlide).toBe(0);
  });
});
