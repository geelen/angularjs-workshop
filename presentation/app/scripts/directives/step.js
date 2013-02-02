'use strict';

presentationApp.directive('step', function () {
  return {
    scope: true,
    require: '^slide',
    link: function (scope, element, attrs, slideController) {
      var stepNr = parseInt(attrs.step) || slideController.nextStepNr();
      scope.$watch("currentSlide", function () {
        var stepIsVisible = slideController.slideNr * 10 + stepNr <= scope.currentSlide * 10;
        element.css('visibility', stepIsVisible ? 'visible' : 'hidden');
      });
    }
  };
});
