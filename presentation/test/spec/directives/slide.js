'use strict';

describe('Directive: slide', function () {
  beforeEach(module('presentationApp'));

  var firstSlide, secondSlide, thirdSlide, fourthSlide;

  beforeEach(inject(function ($rootScope, $compile) {
    var template = angular.element(
      "<slide><h1>Slide One</h1></slide>" +
        "<slide><h1>Slide Two</h1></slide>" +
        "<slide><h1>Slide Three</h1></slide>" +
        "<slide><h1>Slide Four</h1></slide>"
    );
    var parentElement = $compile(template)($rootScope);
    firstSlide = angular.element(parentElement[0]);
    secondSlide = angular.element(parentElement[1]);
    thirdSlide = angular.element(parentElement[2]);
    fourthSlide = angular.element(parentElement[3]);
  }));

  it("should keep each slide's contents", function () {
    expect(firstSlide.text()).toBe('Slide One');
    expect(secondSlide.text()).toBe('Slide Two');
    expect(thirdSlide.text()).toBe('Slide Three');
    expect(fourthSlide.text()).toBe('Slide Four');
  });

  it("should attach prev next and current classes to the slides", inject(function ($rootScope) {
    $rootScope.$apply('currentSlide = 2.0');
    expect(firstSlide.attr('class')).toContain('prev');
    expect(secondSlide.attr('class')).toContain('current');
    expect(thirdSlide.attr('class')).toContain('next');
    expect(fourthSlide.attr('class')).not.toContain('prev', 'current', 'next');

    $rootScope.$apply('currentSlide = 3.0');
    expect(secondSlide.attr('class')).toContain('prev');
    expect(thirdSlide.attr('class')).toContain('current');
    expect(fourthSlide.attr('class')).toContain('next');
    expect(firstSlide.attr('class')).not.toContain('prev', 'current', 'next');

    $rootScope.$apply('currentSlide = 2.9');
    expect(firstSlide.attr('class')).toContain('prev');
    expect(secondSlide.attr('class')).toContain('current');
    expect(thirdSlide.attr('class')).toContain('next');
    expect(fourthSlide.attr('class')).not.toContain('prev', 'current', 'next');
  }));
});
