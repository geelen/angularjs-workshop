'use strict';

gifsApp.controller('MainController', function ($scope, $http) {

  $scope.currentGif = "http://24.media.tumblr.com/437d0b5ebeb039d48ef586c11189b781/tumblr_mgzzfund6t1qzt4vjo1_r1_500.gif";

  $http.jsonp('http://api.tumblr.com/v2/blog/dvdp.tumblr.com/posts?api_key=MzOPX3SNf2sIvdWg2DQvdaDGbw8VbfRz3vPeImWwvBCJ2Q7fzn&callback=JSON_CALLBACK').success(function (data) {
    var gifs = [];

    data.response.posts.forEach(function(post) {
      post.photos.forEach(function (photo) {
        var gif = photo.original_size.url.match(/http[^"]*?\.gif/);
        if (gif) gifs.push(gif[0]);
      })
    });

    $scope.gifs = gifs;
  });
});
