'use strict';

presentationApp.directive('slide', function () {
  return {
    restrict: 'E',
    template: "<div class='slide' ng-transclude ng-show='isShown()'></div>",
    replace: true,
    transclude: true,
    scope: true,
    link: function (scope, element, attrs) {
      var id = parseFloat(attrs.id);
      return scope.isShown = function () {
        return Math.floor(id) === Math.floor(scope.currentSlide);
      };
    }
  };
});
