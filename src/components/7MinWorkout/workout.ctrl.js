import WorkoutPlan from './models/WorkoutPlan';
import Exercise from './models/Excercise';

class WorkoutController {
  static $inject = ['$scope', '$interval', '$log', '$location'];
  
  constructor($scope, $interval, $log, $location) {
    this.$scope = $scope;
    this.$log = $log;
    this.$location = $location;
    this.$interval = $interval;
    this.workoutPlan = this.createWorkoutPlan();
    this.restExercise = {
      details: new Exercise('rest', ' relax!', ' Relax a bit!', 'img/rest.png'),
      duration: this.workoutPlan.restBetweenExercise
    };
    this.startWorkout();
  }

  startWorkout() {
    this.startExercise(this.workoutPlan.exercises.shift());
  }

  createWorkoutPlan() {
    const workoutPlan = new WorkoutPlan('7minWorkout', '7 Minute Workout', 10);
    workoutPlan.exercises.push({
      details: new Exercise(
        'jumpingJacks', 
        'Jumping Jacks', 
        'Jumping Jacks', 
        'img/JumpingJacks.png',
        [
          '//www.youtube.com/embed/4gS0JBKYzx4',
          '//www.youtube.com/embed/HPP0yB-_blA'
        ]),
      duration: 30
    });
    workoutPlan.exercises.push({
      details: new Exercise(
        'ABS', 
        'ABS Crunch', 
        'ABS Crunch', 
        'img/ABS_crunch.png',
        [
          '//www.youtube.com/watch?v=u30ElgGF8yk',
          '//www.youtube.com/watch?v=1919eTCoESo',
          '//www.youtube.com/watch?v=Uw_y_QTZZIg'
        ]),
      duration: 10
    });
    return workoutPlan;
  }
  
  startExercise(exercisePlan) {
    this.$scope.currentExercise = exercisePlan;
    this.$scope.currentExerciseDuration = 0;
    this.$scope.progress = 0;
    this.$interval(() => {
      ++this.$scope.currentExerciseDuration;
      this.$scope.progress = (this.$scope.currentExerciseDuration / this.$scope.currentExercise.duration) * 100;
    }, 1000, this.$scope.currentExercise.duration)
      .then(() => {
        const nextExercise = this.getNextExercise(this.$scope.currentExercise);
        if (nextExercise) {
          this.startExercise(nextExercise);
        } else {
          this.$log.info('Work out completed');
          this.$location.path('/finish');
        }
      });
  }

  getNextExercise(currentExercise) {
    let nextExercise;
    if (currentExercise === this.restExercise) {
      nextExercise = this.workoutPlan.exercises.shift();
    } else {
      if (this.workoutPlan.exercises.length > 0) {
        nextExercise = this.restExercise;
      }
    }

    return nextExercise;
  }
}

export default WorkoutController;