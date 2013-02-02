'use strict';

presentationApp.directive('slide', function () {
  var slideCount = 1.0;
  return {
    restrict: 'E',
    template: "<div class='slide' ng-transclude ng-show='isShown()'></div>",
    replace: true,
    transclude: true,
    scope: true,
    controller: function($scope) {
      var slideId = slideCount++;
      $scope.isShown = function () {
        return Math.floor(slideId) === Math.floor($scope.currentSlide);
      };
      // exposes this to sub directives
      this.slideIsShown = $scope.isShown;
    }
  };
});
