
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
      var video_id = post.data.url.split('v=')[1];
      if (video_id !== undefined) {
        var embedId= "http://www.youtube.com/embed/" + video_id;
        vm.embedIdList.push(embedId);
      }
      // }
    });
    vm.videos = vm.embedIdList;
    console.log(vm.videos);

  }, function errorCallback(response) {
    console.log('There was an error getting the data', response);
  });

}
