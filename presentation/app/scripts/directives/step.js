'use strict';

presentationApp.directive('step', function () {
  var stepCount = 1;
  return {
    scope: true,
    require: '^slide',
    link: function (scope, element, attrs, slideController) {
      var stepNr = parseInt(attrs.step) || stepCount++;
      scope.$watch("currentSlide", function () {
        var onCurrentSlide = slideController.slideIsShown() && stepNr <= (scope.currentSlide * 10) % 10;
        element.css('visibility', onCurrentSlide ? 'visible' : 'hidden');
      });
    }
  };
});
