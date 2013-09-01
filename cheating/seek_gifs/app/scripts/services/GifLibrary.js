'use strict';

gifsApp.service('GifLibrary', function(Fetcher) {
  var privateData;

  // publicApi
  return {
    allGifs: [],
    addTumblr: function (tumblrName) {
      var self = this;
      Fetcher.fetch(tumblrName).then(function (gifs) {
        gifs.forEach(function (gif) {
          self.allGifs.push(gif);
        })
      });
    }
  };
});
