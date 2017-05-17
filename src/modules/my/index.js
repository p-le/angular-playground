import angular from 'angular';
import MyComponent from '../../components/My';

const myModule = angular
  .module('myModule', [])
  .component('myComponent', MyComponent);
export default myModule;