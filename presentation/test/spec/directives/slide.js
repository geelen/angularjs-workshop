'use strict';

describe('Directive: slide', function() {
  beforeEach(module('presentationApp'));

  var element;

  it('should make hidden element visible', inject(function($rootScope, $compile) {
    element = angular.element('<slide></slide>');
    element = $compile(element)($rootScope);
    expect(element.text()).toBe('this is the slide directive');
  }));
});
