'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('my app', function() {

  beforeEach(function() {
    browser().navigateTo('/');
  });

  it('should not automatically redirect', function() {
    expect(browser().location().url()).toBe('/');
  });

  it('should only show one slide', function () {
    expect(element('[ng-view] .slide:visible').count()).toBe(1);
  });

  it('should show us the first slide', function () {
    expect(element('[ng-view] .slide:visible').text()).
      toContain('Welcome to Angular')
  });

  it('should move to the second slide', function () {
    element('a[ng-click="goNext()"]').click()
    expect(element('[ng-view] .slide:visible').count()).toBe(1);
    expect(element('[ng-view] .slide:visible').text()).
      toContain('My name is Glen')
  });

  it('should move to the third slide', function () {
    element('a[ng-click="goNext()"]').click()
    element('a[ng-click="goNext()"]').click()
    expect(element('[ng-view] .slide:visible').count()).toBe(1);
    expect(element('[ng-view] .slide:visible').text()).
      toContain('Thanks for listening')
  });

});
