'use strict';

describe('Directive: step', function() {
  beforeEach(module('presentationApp'));

  var element;

  beforeEach(inject(function ($rootScope, $compile) {
    element = angular.element("<li step='1.2'>An important point</li>");
    element = $compile(element)($rootScope);
  }));

  it("should keep the slide's contents", function () {
    expect(element.text()).toBe('An important point');
  });

  it("should show the slide if the currentSlide is between 1.2 and 1.9", inject(function ($rootScope) {
    $rootScope.$apply('currentSlide = 1.0');
    expect(element.css('visibility')).toBe('hidden');

    $rootScope.$apply('currentSlide = 1.1');
    expect(element.css('visibility')).toBe('hidden');

    $rootScope.$apply('currentSlide = 1.2');
    expect(element.css('visibility')).toBe('visible');

    $rootScope.$apply('currentSlide = 1.9');
    expect(element.css('visibility')).toBe('visible');

    $rootScope.$apply('currentSlide = 2.0');
    expect(element.css('visibility')).toBe('hidden');
  }));
});
