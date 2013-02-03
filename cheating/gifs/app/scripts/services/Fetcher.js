'use strict';

gifsApp.factory('Fetcher', function ($http, $q) {
  var apiKey = 'MzOPX3SNf2sIvdWg2DQvdaDGbw8VbfRz3vPeImWwvBCJ2Q7fzn';
  var alreadyFetched = [];

  return {
    fetch: function (tumblr) {
      var deferred = $q.defer();

      if (alreadyFetched.indexOf(tumblr) == -1) {
        alreadyFetched.push(tumblr);
        $http.jsonp('http://api.tumblr.com/v2/blog/' + tumblr + '.tumblr.com/posts?api_key=' + apiKey + '&callback=JSON_CALLBACK')
          .success(function (data) {
            var gifs = [];

            data.response.posts.forEach(function (post) {
              if (post.photos) post.photos.forEach(function (photo) {
                var gif = photo.original_size.url.match(/http[^"]*?\.gif/);
                if (gif) gifs.push(gif[0]);
              })
            });

            deferred.resolve(gifs);
          });
      } else {
        deferred.resolve([]);
      }

      return deferred.promise;
    }
  };
});
