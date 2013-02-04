'use strict';

describe('Directive: slide', function() {
  beforeEach(module('demoApp'));

  var compileElement;

  beforeEach(inject(function ($rootScope, $compile) {
    compileElement = function () {
      var element = angular.element('<slide><h1>Slide Title</h1><p>Slide content</p></slide>');
      return $compile(element)($rootScope);
    }
  }));

  it('should include whatever is inside the element', function () {
    var element = compileElement();
    expect(element.text()).toContain('Slide Title');
    expect(element.text()).toContain('Slide content');
  });

  it('should remove the side element', function () {
    var element = compileElement();
    expect(element[0].tagName).not.toBe('SLIDE');
  });

  it('should attach the slide class to the element', function () {
    var element = compileElement();
    expect(element.attr('class')).toContain('slide')
  });

  it('should number each slide', function () {
    var element1 = compileElement();
    expect(element1.attr('id')).toBe('slide1');
    var element2 = compileElement();
    expect(element2.attr('id')).toBe('slide2');
  });

  it('should be visible if the current slide is 1', inject(function ($rootScope) {
    var element1 = compileElement();
    var element2 = compileElement();
    var setNr = function () {
      $rootScope.currentSlide = 1;
    }
    $rootScope.$apply(setNr);

    expect(element1.css('display')).toBe('');
    expect(element2.css('display')).toBe('none');

  }));
});
