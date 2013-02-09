'use strict';

describe('Directive: slide', function() {
  beforeEach(module('presoApp'));

  var element;

  it('should make hidden element visible', inject(function($rootScope, $compile) {

    var template = angular.element(
      "<slide><h1>Slide One</h1></slide>" +
        "<slide><h1>Slide Two</h1></slide>"
    );
    var parentElement = $compile(template)($rootScope);
    var firstSlide = angular.element(parentElement[0]);
    var secondSlide = angular.element(parentElement[1]);

    expect(firstSlide.text()).toBe('Slide One');
    expect(secondSlide.text()).toBe('Slide Two');
  }));
});
