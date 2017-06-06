const routing = ($routeProvider, $locationProvider) => {
  $routeProvider.
    when('/', {
      template: '<div>{{message}}</div>',
      controller: 'MainCtrl'
    }).
    when('/show', {
      template: '<div>{{message}}</div>',
      controller: 'ShowCtrl'
    })
  $locationProvider.html5Mode(false).hashPrefix('!');
}

routing.$inject = ['$routeProvider', '$locationProvider'];

export default routing;