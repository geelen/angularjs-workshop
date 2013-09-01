'use strict';

describe('Filter: Percentage', function () {

  // load the filter's module
  beforeEach(module('GithubBrowser'));

  // initialize a new instance of the filter before each test
  var percentage;
  beforeEach(inject(function ($filter) {
    percentage = $filter('percentage');
  }));

  it('should add a percentage symbol to numbers', function () {
    expect(percentage(50)).toBe('50%');
  });

  it('should return 0% for non-numbers', function () {
    expect(percentage()).toBe('0%');
    expect(percentage(null)).toBe('0%');
    expect(percentage("50")).toBe('0%');
  });

});
