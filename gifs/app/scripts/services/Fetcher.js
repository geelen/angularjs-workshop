'use strict';

gifsApp.factory('Fetcher', function ($http, $q) {
  var baseUrl = 'http://api.tumblr.com/v2/blog/',
    restOfUrl = '.tumblr.com/posts?api_key=MzOPX3SNf2sIvdWg2DQvdaDGbw8VbfRz3vPeImWwvBCJ2Q7fzn&callback=JSON_CALLBACK';
  return {
    goFetch: function (blogName) {
      var deferred = $q.defer();

      $http.jsonp(baseUrl + blogName + restOfUrl)
        .success(function (data) {
          var gifs = [];

          data.response.posts.forEach(function (post) {
            if (post.photos) {
              post.photos.forEach(function (photo) {
                var url = photo.original_size.url;
                if (url.match(/http[^"]*?\.gif/))
                  gifs.push(url);
              });
            }
          });

          deferred.resolve(gifs);
        });

      return deferred.promise;
    }
  };
});
