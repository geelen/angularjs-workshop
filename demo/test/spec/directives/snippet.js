'use strict';

describe('Directive: snippet', function() {
  beforeEach(module('demoApp'));

  var element;

  it('should make hidden element visible', inject(function($rootScope, $compile, $httpBackend) {
    var content = "<html><body><h1>My code!</h1></body></html>";
    $httpBackend.expectGET("../1/basics.html?livereload=false")
      .respond(200, content);

    element = angular.element("<snippet src='../1/basics.html' lang='html'></snippet>");
    element = $compile(element)($rootScope);

    $httpBackend.flush();

    expect(element.text()).toContain(content);
  }));
});
