'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('my app', function() {

  beforeEach(function() {
    browser().navigateTo('/');
  });

  it('should automatically redirect', function() {
    expect(browser().location().url()).toBe('/');
  });

  it('should render the first slide', function() {
    expect(element('[ng-view] .slide:visible').count()).toBe(1);
    expect(element('[ng-view] .slide:visible').attr('id')).toBe('slide1');
  });

  it('should be able to navigate', function() {
    element('[ng-click="nextSlide()"]').click();
    element('[ng-click="nextSlide()"]').click();

    expect(element('[ng-view] .slide:visible').count()).toBe(1);
    expect(element('[ng-view] .slide:visible').attr('id')).toBe('slide3');

    element('[ng-click="prevSlide()"]').click();

    expect(element('[ng-view] .slide:visible').count()).toBe(1);
    expect(element('[ng-view] .slide:visible').attr('id')).toBe('slide2');
  });

});
