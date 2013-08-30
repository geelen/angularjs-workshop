'use strict';

presentationApp.directive('snippet', function($http) {
  return {
    restrict: 'E',
    replace: true,
    template: "<pre><code data-language='{{lang}}'>{{content}}</code></pre>",
    scope: {
      lang: '@'
    },
    link: function(scope, element, attrs) {
      $http.get(attrs.file + "?livereload=false").success(function(data) {
        scope.content = data;
      });
    }
  };
});
