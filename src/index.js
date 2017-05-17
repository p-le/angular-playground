import angular from 'angular';
import 'angular-route';
import routes from './routes';

const app = angular.module('myApp', [ 
  'ngRoute'
]);
app.config(routes);
