'use strict';

presentationApp.directive('step', function () {
  return {
    link: function (scope, element, attrs) {
      var id = parseFloat(attrs.step);
      return scope.$watch("currentSlide", function () {
        var onCurrentSlide = Math.floor(id) === Math.floor(scope.currentSlide) && id <= scope.currentSlide;
        return element.css('visibility', onCurrentSlide ? 'visible' : 'hidden');
      });
    }
  };
});
