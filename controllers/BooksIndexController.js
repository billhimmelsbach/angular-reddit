
angular.module('libraryApp')
  .controller('BooksIndexController', BooksIndexController);

BooksIndexController.$inject=['$http'];

function BooksIndexController ($http) {
  var vm = this;
  vm.embedIdList = [];
  console.log(vm.embedIdList);
  vm.newBook = {};
  vm.orderBy="title";
  vm.reverse=false;
  $http({
    method: 'GET',
    url:'https://www.reddit.com/r/music/new.json?sort=new',
  }).then(function successCallback(response) {
    // console.log(response.data.data.children);
    // console.log(response.data.data.children[0].data.url);
    // console.log(response.data.data.children[0].data.media_embed.content);
    redditPosts = response.data.data.children;
    // console.log(redditPosts);
    redditPosts.forEach(function (post) {
      // console.log(post.data.url);
      var video_id = post.data.url.split('v=')[1];
      // var ampersandPosition = video_id.indexOf('&');
      // if(ampersandPosition != -1) {
      // video_id = video_id.substring(0, ampersandPosition);
      // console.log(video_id);
      if (video_id !== undefined) {
        var embedId= "http://www.youtube.com/embed/" + video_id;
        // console.log(embedId);
        vm.embedIdList.push(embedId);
        // console.log(vm.embedIdList);
      }
      // }
    });
    vm.books = vm.embedIdList;
    console.log(vm.books);

// return url;
    // console.log(vm.books);
    // console.log(response.data.data.children);
    // console.log(response.data.data.children.data.url);
    // console.log(vm.books);
    // console.log(response.data.books)
  }, function errorCallback(response) {
    console.log('There was an error getting the data', response);
  });

  vm.books = vm.embedIdList;
  console.log(vm.books);
}
