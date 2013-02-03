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

});
