import MyComponent from '../components/My';

export default ($routeProvider) => {
  $routeProvider
    .when('/', MyComponent)
}