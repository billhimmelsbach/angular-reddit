angular.module('redditApp', ['ngRoute'])
       .config(config);

      //  .controller('BooksShowController', BooksShowController)
      //  .controller('VideosIndexController', VideosIndexController);

////////////
// ROUTES //
////////////

config.$inject = ['$routeProvider', '$locationProvider', '$sceProvider'];
function config (  $routeProvider,   $locationProvider, $sceProvider)  {
  $sceProvider.enabled(false);

  $routeProvider
    .when('/', {
      templateUrl: '/templates/videos/index.html',
      controller:  'VideosIndexController',
      controllerAs: 'videosCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });

  // this just makes it so our URLs don't have /#/ in them.
  $locationProvider
    .html5Mode({
      enabled: true,
      requireBase: false
    });
}
