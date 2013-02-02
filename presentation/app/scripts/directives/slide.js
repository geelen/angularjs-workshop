'use strict';

presentationApp.directive('slide', function () {
  var slideCount = 1.0;
  return {
    restrict: 'E',
    template: "<div class='slide' ng-transclude ng-class='slideClass()'></div>",
    replace: true,
    transclude: true,
    scope: true,
    controller: function ($scope) {
      var slideId = slideCount++;
      $scope.slideClass = function () {
        var cmp = Math.floor(slideId) - Math.floor($scope.currentSlide);
        return {
          prev: cmp === -1,
          current: cmp === 0,
          next: cmp === 1,
          hidden: cmp < -1 || cmp > 1
        }
      };
      // sub directives just need to check whether the slide is invisible
      this.slideIsShown = function () {
        return !$scope.slideClass.hidden;
      }
    }
  };
});
