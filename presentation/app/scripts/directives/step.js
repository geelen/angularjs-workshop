'use strict';

presentationApp.directive('step', function () {
  return {
    link: function (scope, element, attrs) {
      var id = parseFloat(attrs.step);
      scope.$watch("currentSlide", function () {
        var onCurrentSlide = Math.floor(id) === Math.floor(scope.currentSlide) && id <= scope.currentSlide;
        element.css('visibility', onCurrentSlide ? 'visible' : 'hidden');
      });
    }
  };
});
