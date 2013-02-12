'use strict';

describe('Controller: HelpCtrl', function() {

  // load the controller's module
  beforeEach(module('gifsApp'));

  var HelpCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($controller) {
    scope = {};
    HelpCtrl = $controller('HelpCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function() {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
