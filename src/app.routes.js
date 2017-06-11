const routing = ($routeProvider, $locationProvider, $sceDelegateProvider) => {
  $routeProvider
    .when('/start', {
      templateUrl: '/static/partials/start.html'
    })
    .when('/workout', {
      templateUrl: '/static/partials/workout.html'
    })
    .when('/finish', {
      templateUrl: '/static/partials/finish.html'
    })
    .when('/mixcloud', {
      templateUrl: '/static/partials/mixcloud.html'
    })
    .otherwise({
      redirectTo: '/mixcloud'
    });
  $locationProvider.html5Mode(true);
  $sceDelegateProvider.resourceUrlWhitelist([
    'self',
    '//*.youtube.com/embded'
  ]);
};

routing.$inject = ['$routeProvider', '$locationProvider', '$sceDelegateProvider'];
export default routing;