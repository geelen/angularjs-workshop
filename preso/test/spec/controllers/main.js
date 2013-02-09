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
});
