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

  app.directive("draggableSlider", function ($document) {
    return {
      restrict: 'E',
      templateUrl: "slider_template.html",
      replace: true,
      scope: {
        nibPosition: '=ngModel',
        sliderWidth: '@'
      },
      link: function (scope, elem, attrs) {
        var dragging, startEvent;
        $document
          .bind('mousemove', function (e) {
            if (dragging) {
              var width = elem[0].getClientRects()[0].width;
              scope.nibPosition = 100 * Math.max(0, Math.min(width, e.x - startEvent.x)) / width;
              scope.$apply();
            }
          })
          .bind('mouseup', function (e) {
            dragging = false;
          });

        scope.startSliding = function (e) {
          if (!angular.isDefined(startEvent)) startEvent = e;
          dragging = true;
        };
      }
    }
  });
})();
