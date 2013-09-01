'use strict';

describe('Directive: slider', function () {

  // load the directive's module
  beforeEach(module('GithubBrowser'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should move the nib around according to the model', inject(function ($compile) {
    element = angular.element('<draggable-slider ng-model="foo"></draggable-slider>');
    element = $compile(element)(scope);

    scope.foo = 50;
    scope.$apply();

    var nib = angular.element(element.children()[0]);
    expect(nib.attr('style')).toMatch("margin-left: 50%");

    scope.foo = 25;
    scope.$apply();
    expect(nib.attr('style')).toMatch("margin-left: 25%");
  }));
});
