'use strict';

describe('Directive: snippet', function () {
  beforeEach(module('demoPresoApp'));

  var element, compileSnippet;

  beforeEach(inject(function ($rootScope, $compile, $httpBackend) {
    compileSnippet = function (snippetText, lang) {
      $httpBackend.expectGET(/^\/something.html/)
        .respond(200, snippetText)
      element = angular.element("<snippet lang='" + lang + "' src='/something.html'></snippet>");
      element = $compile(element)($rootScope);
      $httpBackend.flush();
    }
  }));

  it('should handle the first snippet', inject(function ($rootScope, $compile, $httpBackend) {
    var snippetText = "<html><body><h1>This is a snippet</h1></body></html>"
    compileSnippet(snippetText, 'html');
    expect(element.text()).toContain(snippetText);
    expect(element.attr('lang')).toBe('html');
  }));

  it('should handle a javascript snippet', inject(function ($rootScope, $compile, $httpBackend) {
    var snippetText = "function AngularRulez() { return true; }"
    compileSnippet(snippetText, 'js');
    expect(element.text()).toContain(snippetText);
    expect(element.attr('lang')).toBe('js');
  }));
});
