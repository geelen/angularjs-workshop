'use strict';

gifsApp.factory('Fetcher', function ($http, $q) {
  var apiKey = 'MzOPX3SNf2sIvdWg2DQvdaDGbw8VbfRz3vPeImWwvBCJ2Q7fzn';
  var blogName = 'dvdp.tumblr.com';

  return {
    fetch: function () {
      var deferred = $q.defer();

      $http.jsonp('http://api.tumblr.com/v2/blog/' + blogName + '/posts?api_key=' + apiKey + '&callback=JSON_CALLBACK')
        .success(function (data) {
          var gifs = [];

          data.response.posts.forEach(function (post) {
            post.photos.forEach(function (photo) {
              var gif = photo.original_size.url.match(/http[^"]*?\.gif/);
              if (gif) gifs.push(gif[0]);
            })
          });

          deferred.resolve(gifs);
        });

      return deferred.promise;
    }
  };
});
