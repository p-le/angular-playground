import angular from 'angular';
import ngRoute from 'angular-route';
import ngAnimate from 'angular-animate';
import routing from './app.routes';
import 'normalize.css';
import './app.sass';

import workoutModule from './components/7MinWorkout';
import mixcloudModule from './components/Mixcloud';
import sharedModule from './shared/';

const app = angular.module('mainApp', [
  ngRoute,
  ngAnimate,
  workoutModule,
  mixcloudModule,
  sharedModule
]);

app.config(routing);

