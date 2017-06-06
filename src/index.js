import angular from 'angular';
import 'angular-route';
import './controller';
import routing from './routing.js';
import 'normalize.css';

const helloWorldApp = angular.module('helloWorldApp', [
  'ngRoute',
  'helloWorldControllers'
]);
console.log(helloWorldApp);
helloWorldApp.config(routing);