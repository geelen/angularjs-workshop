'use strict';

describe('Controller: MainControllerCtrl', function() {

  // load the controller's module
  beforeEach(module('gifsApp'));

  var MainControllerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($controller) {
    scope = {};
    MainControllerCtrl = $controller('MainControllerCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function() {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
