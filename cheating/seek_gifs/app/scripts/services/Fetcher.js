'use strict';

gifsApp.factory('Fetcher', function ($http, $q) {
  var baseUrl = 'http://api.tumblr.com/v2/blog/',
    apiKey = 'MzOPX3SNf2sIvdWg2DQvdaDGbw8VbfRz3vPeImWwvBCJ2Q7fzn',
    isAGif = /http[^"]*?\.gif/;

  return {
    fetch: function (blogName) {
      var gifs = [],
        deferred = $q.defer();

      $http.jsonp(baseUrl + blogName + '.tumblr.com/posts?api_key=' +
        apiKey + '&callback=JSON_CALLBACK')

        .success(function (data) {
          data.response.posts.forEach(function (post) {
            if (post.photos)
              post.photos.forEach(function (photo) {

                var url = photo.original_size.url;
                if (url.match(isAGif))
                  gifs.push(url);
              });
          });

          deferred.resolve(gifs);
        });

      return deferred.promise;
    }
  }
});
