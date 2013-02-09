'use strict';

describe('Directive: slide', function() {
  beforeEach(module('presoApp'));

  var firstSlide, secondSlide;

  beforeEach(inject(function($rootScope, $compile) {
    var template = angular.element(
      "<slide><h1>Slide One</h1></slide>" +
        "<slide><h1>Slide Two</h1></slide>"
    );

    var parentElement = $compile(template)($rootScope);
    firstSlide = angular.element(parentElement[0]);
    secondSlide = angular.element(parentElement[1]);

    $rootScope.currentSlide = 1;
    $rootScope.$apply();
  }));

  it('the slides should keep their contents', function() {
    expect(firstSlide.text()).toBe('Slide One');
    expect(secondSlide.text()).toBe('Slide Two');
  });

  it('should only show the first slide', function() {
    expect(firstSlide.css('display')).toBe('');
    expect(secondSlide.css('display')).toBe('none');
  });

  it('show the second slide if the variable changes', inject(function($rootScope) {
    $rootScope.$apply('currentSlide = 2');
    expect(firstSlide.css('display')).toBe('none');
    expect(secondSlide.css('display')).toBe('');
  }));
});
