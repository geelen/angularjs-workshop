'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('my app', function() {

  beforeEach(function() {
    browser().navigateTo('/');
  });

  it('should automatically redirect', function() {
    expect(browser().location().url()).toBe('/slides#1.0');
  });

  it('should render the first slide', function() {
    expect(element('[ng-view] .slide:first').attr('class')).toMatch(/current/);
    expect(element('[ng-view] .slide.current').count()).toBe(1);
    expect(element('[ng-view] .slide.current').text()).toMatch(/Glen Maddern/);
  });

  it('should be able to navigate', function() {
    element('.next').click();
    element('.next').click();

    // viewing slide 3
    expect(element('[ng-view] .slide:first').attr('class')).toMatch(/hidden/);
    expect(element('[ng-view] .slide:nth-of-type(3)').attr('class')).toMatch(/current/);
    expect(element('[ng-view] .slide.current').count()).toBe(1);
    expect(element('[ng-view] .slide.current').text()).toMatch(/This course/);

    element('.prev').click();
    // viewing slide 2
    expect(element('[ng-view] .slide:first').attr('class')).toMatch(/prev/);
    expect(element('[ng-view] .slide:nth-of-type(2)').attr('class')).toMatch(/current/);
    expect(element('[ng-view] .slide:nth-of-type(3)').attr('class')).toMatch(/next/);
    expect(element('[ng-view] .slide.current').count()).toBe(1);
    expect(element('[ng-view] .slide.current').text()).toMatch(/Who am I/);
  });

});
