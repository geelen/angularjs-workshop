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

  it('should respond to keyboard input', function() {
    //); angular.scenario.Future element('document').query(function(d) { console.log(d.trigger('keydown')); });
    element('#stage').query(function(d, done) {
      console.log(d);
      window.d = d;
      d.trigger('keydown', {keyIdentifier: 'Right'}); done()
    });
    pause();
  });

});
