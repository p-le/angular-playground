import angular from 'angular';
import WorkoutController from './workout.ctrl';
import youtubeEmbedUrl from './youtubeUrl.filter';

const workoutModule = angular.module('mainApp.7minWorkout', []);
workoutModule
  .controller('WorkoutController', WorkoutController)
  .directive('progressBar', () => new ProgressBar())
  .filter('youtubeEmbedUrl', youtubeEmbedUrl);

export default workoutModule.name;