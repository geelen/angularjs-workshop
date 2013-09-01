'use strict';

presoApp.directive('slide', function() {
  var slideNr = 1;
  return {
    template: '<div class="slide" ng-transclude></div>',
    transclude: true,
    replace: true,
    restrict: 'E',

    link: function (scope, element, attrs) {
      var mySlideNr = slideNr++;
      element.attr('id', 'slide' + mySlideNr);
      scope.$watch('currentSlide', function(currentSlideVal) {
        if (currentSlideVal === mySlideNr) {
          element.css('display', '');
        } else {
          element.css('display', 'none');
        }
      });
    }
  };
});
