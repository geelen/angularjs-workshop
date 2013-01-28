'use strict';

presentationApp.service('Keyboard', function($rootScope, $document) {
  var bindings = {};
  $document.bind('keydown', function(k) {
    var callback = bindings[k.keyIdentifier];
    if (callback)
      callback();
      $rootScope.$apply();
  });

  this.on = function(keyIdentifier, callback) {
    bindings[keyIdentifier] = callback;
  };
});
