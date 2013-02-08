'use strict';

gifsApp.controller('MainCtrl', function ($scope, $http) {
  $scope.gifs = [];

  $http.jsonp('http://api.tumblr.com/v2/blog/dvdp.tumblr.com/posts?api_key=MzOPX3SNf2sIvdWg2DQvdaDGbw8VbfRz3vPeImWwvBCJ2Q7fzn&callback=JSON_CALLBACK')
    .success(function (data) {
      data.response.posts.forEach(function (post) {
        if (post.photos) {
          post.photos.forEach(function (photo) {
            var url = photo.original_size.url;
            if (url.match(/http[^"]*?\.gif/))
              $scope.gifs.push(url);
          });
        }
      });
    });
});
