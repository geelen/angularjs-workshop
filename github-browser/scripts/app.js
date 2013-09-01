(function () {
  'use strict';

  var app = angular.module("GithubBrowser", [])

  // global config goes here

  app.value('LocalStorage', localStorage);

  app.filter('before', function () {
    return function (value, before) {
      if (value) {
        return before + value;
      }
    }
  })

  app.filter('percentage', function () {
    return function (value) {
      var num = (angular.isNumber(value)) ? value : 0;
      return num + "%";
    }
  })

  app.directive("draggable", function ($document) {
    return function (scope, elem, attrs) {
      var dragging, startEvent;
      $document
        .bind('mousemove', function (e) {
          if (dragging) {
            scope.nibMargin = e.x - startEvent.x
          }
        })
        .bind('mouseup', function (e) {
          dragging = false;
        });

      scope.startSliding = function(e) {
        startEvent = e;
        dragging = true;
      };

      console.log(elem);
    }
  })

})();
