'use strict';

gifsApp.service('RandomChooser', function ($timeout, Tumblrs) {
  var speed = 3000;

  this.chooseRandomly = function (callback) {
    var loopFn = function () {
      callback(Tumblrs.allGifs[Math.floor(Math.random() * Tumblrs.allGifs.length)]);
      $timeout(loopFn, speed);
    };

    loopFn();
  }
});
