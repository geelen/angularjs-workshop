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
      scope: {
        nibPosition: '=ngModel',
        sliderWidth: '@'
      },
      link: function (scope, elem, attrs) {
        var dragging, startEvent;
        $document
          .bind('mousemove', function (e) {
            if (dragging) {
              scope.nibPosition = 100 * Math.max(0, Math.min(scope.sliderWidth, e.x - startEvent.x)) / scope.sliderWidth;
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
