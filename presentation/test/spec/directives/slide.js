'use strict';

describe('Directive: slide', function () {
  beforeEach(module('presentationApp'));

  var element;

  beforeEach(inject(function ($rootScope, $compile) {
    $rootScope.currentSlide = 1.0;
    element = angular.element("<slide id='1'><h1>My Slide</h1></slide>");
    element = $compile(element)($rootScope);
  }));

  it("should keep the slide's contents", function () {
    expect(element.text()).toBe('My Slide');
  });

  it("should show the slide if the currentSlide is 1.0 to 1.9", inject(function ($rootScope) {
    expect(element.css('display')).toBe('');

    $rootScope.$apply('currentSlide = 2.0');
    expect(element.css('display')).toBe('none');

    $rootScope.$apply('currentSlide = 1.9');
    expect(element.css('display')).toBe('');
  }));
});
