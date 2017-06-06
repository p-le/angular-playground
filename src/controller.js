import angular from 'angular';

const helloWorldControllers = angular.module('helloWorldControllers', []);

helloWorldControllers.controller('MainCtrl', [
  '$scope', '$location', '$http', function($scope, location, $http) {
    $scope.message = 'Hello World';
  }
]);

helloWorldControllers.controller('ShowCtrl', [
  '$scope', '$location', '$http', function ShowCtrl($scope) {
    $scope.message = "Show the World";
  }
]);