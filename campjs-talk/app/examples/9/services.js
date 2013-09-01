var app = angular.module('myApp', [])

app.service('MyService', function() {
  this.is = Math.random();
  console.log("Service");
});

app.factory('MyFactory', function() {
  console.log("Factory");
  return {
    is: Math.random()
  }
});

app.controller("myController", function($scope, MyService, MyFactory) {
  console.log("Controller1");
  console.log(MyService.is);
  console.log(MyFactory.is);
});

app.controller("anotherController", function($scope, MyService, MyFactory) {
  console.log("Controller2");
  console.log(MyService.is);
  console.log(MyFactory.is);
});
