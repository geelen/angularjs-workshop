'use strict';

gifsApp.factory('GifLibrary', function (Fetcher) {
  return {
    allGifs: [],

    addGifs: function (newTumblrName) {
      var allGifs = this.allGifs;
      Fetcher.goFetch(newTumblrName).then(function(newGifs) {
        newGifs.forEach(function(newGif) {
          allGifs.push(newGif);
        });
      });
    }
  };
});
