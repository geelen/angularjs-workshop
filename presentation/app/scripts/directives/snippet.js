'use strict';

presentationApp.directive('snippet', function($http) {
  return {
    restrict: 'E',
    replace: true,
    template: "<pre><code data-language='{{lang}}'>{{content}}</code></pre>",
    scope: true,
    link: function(scope, element, attrs) {
      scope.lang = attrs.lang;
      $http.get(attrs.file + "?livereload=false").success(function(data) {
        scope.content = data;
      });
    }
  };
});
