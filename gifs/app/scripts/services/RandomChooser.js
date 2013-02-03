'use strict';

gifsApp.service('RandomChooser', function ($timeout) {
  var speed = 3000;

  this.chooseRandomly = function (all, callback) {
    var loopFn = function () {
      callback(all[Math.floor(Math.random() * all.length)]);
      $timeout(loopFn, speed);
    };

    loopFn();
  }
});
