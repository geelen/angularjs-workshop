'use strict';

describe('Directive: snippet', function() {
  beforeEach(module('presentationApp'));

  var element;

  beforeEach(inject(function ($rootScope, $compile, $httpBackend) {
    $httpBackend.expectGET('examples/3.html?livereload=false')
      .respond(200, "<html><body><h1>Snippet!!</h1></body></html>");
    element = angular.element('<snippet lang="html" file="examples/3.html"></snippet>');
    element = $compile(element)($rootScope);
    $httpBackend.flush();
  }));

  it("should display the snippet content", function () {
    expect(element.text()).toBe('<html><body><h1>Snippet!!</h1></body></html>');
  });
});
