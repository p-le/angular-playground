import angular from 'angular';
import { 
  InputText, 
  InputContainer,
  InputLabel } from './Form';

const sharedModule = angular.module('mainApp.shared', []);

sharedModule
  .directive('plInputContainer', InputContainer.inputContainerFactory)
  .directive('label', () => new InputLabel())
  .directive('input', () => new InputText());


export default sharedModule.name;

