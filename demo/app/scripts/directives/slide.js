'use strict';

demoApp.directive('slide', function() {
  var slideNr = 1;
  return {
    template: '<div id="slide1" class="slide" ng-transclude ng-show="myTimeToShine()"></div>',
    restrict: 'E',
    transclude: true,
    replace: true,
    scope: true,
    link: function (scope, element, attrs) {
      var thisSlidesNr = slideNr++; //sorry for this.
      element.attr('id', 'slide' + thisSlidesNr);
      scope.myTimeToShine = function () {
        return thisSlidesNr == scope.currentSlide;
      }
    }
  };
});

// <a ng-click2='goDoSomething()'>
//demoApp.directive('ngClick2', function () {
//  return function (scope, element, attrs) {
//    element.bind('click', function () {
//      scope.$apply(attrs.ngClick2);
//    })
//  }
//});

/*

<slide>
  content here...
</slide>

=>

<div class='slide' id='slide1'>
  <div class='inner'>
    content here...
  </div>
</div>

  */
