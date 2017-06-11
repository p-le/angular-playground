
export class InputContainer {
  constructor($rootScope) {
    this.restrict = 'E';
    this.controller = InputContainerController;
  }

  static inputContainerFactory($rootScope) {
    return new InputContainer($rootScope);
  }
}

InputContainer.inputContainerFactory.$inject = ['$rootScope'];

export class InputContainerController {  
  static $inject = ['$scope', '$element', '$attrs', '$animate'];
  constructor($scope, $element, $attrs, $animate) {
    this.$scope = $scope;
    this.$element = $element;
    this.label = null;
    this.input = null;
    this.$scope.$watch(
      () => this.label && this.input,
      (aaa) => console.log(aaa)
    );
  }

  setInputFocused(isFocused) {
    this.$element.toggleClass('pl-input--focused', !!isFocused);
  }

  setHasValue(check) {
    this.$element.toggleClass('pl-input--has-value', !!check);
  }
}



