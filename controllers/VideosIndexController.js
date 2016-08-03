
angular.module('redditApp')
  .controller('VideosIndexController', VideosIndexController);

VideosIndexController.$inject=['$http'];

function VideosIndexController ($http) {
  var vm = this;
  vm.embedIdList = [];
  console.log(vm.embedIdList);
  // vm.orderBy="title";
  // vm.reverse=false;
  $http({
    method: 'GET',
    url:'https://www.reddit.com/r/music/new.json?sort=new',
  }).then(function successCallback(response) {
    // console.log(response.data.data.children);
    redditPosts = response.data.data.children;
    redditPosts.forEach(function (post) {
      if (post.data.secure_media !== null) {
        var videoTitle = post.data.secure_media.oembed.title;
        console.log(videoTitle);
      }
      var video_id = post.data.url.split('v=')[1];
      if (video_id !== undefined) {
        var ampersandPosition = video_id.indexOf('&');
        if (ampersandPosition != -1) {
          video_id = video_id.substring(0, ampersandPosition);
        }
        var embedId= "http://www.youtube.com/embed/" + video_id;
        vm.embedIdList.push(embedId);
      }
    });
    vm.videos = vm.embedIdList;
    console.log(vm.videos);

  }, function errorCallback(response) {
    console.log('There was an error getting the data', response);
  });

}
