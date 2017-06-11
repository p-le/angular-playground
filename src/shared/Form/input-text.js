export class InputText {
  constructor() {
    this.restrict = 'E';
    this.require = [ '^?plInputContainer', '?ngModel', '^?form' ];
  }

  link(scope, element, attr, ctrls) {
    const [containerCtrl, ngModelCtrl, formCtrl] = [...ctrls];
    const hasNgModel = !!ngModelCtrl;
    const isReadonly = !!attr.readonly;

    if (!containerCtrl) return;
    containerCtrl.input = element;
    element.addClass('pl-input');

    ngModelCtrl.$parsers.push((value) => {
      containerCtrl.setHasValue(!ngModelCtrl.$isEmpty(value));
      return value;
    });

    ngModelCtrl.$formatters.push((value) => {
      containerCtrl.setHasValue(!ngModelCtrl.$isEmpty(value));
      return value;
    });

    if(!isReadonly) {
      element.on('input', () => containerCtrl.setHasValue(element.val().length > 0 || element[0].validity.badInput));
      element.on('focus', () => containerCtrl.setInputFocused(true));
      element.on('blur', () => containerCtrl.setInputFocused(false));
    }

    scope.$on('$destroy', () => {
      containerCtrl.setInputFocused(false);
      containerCtrl.setHasValue(false);
      containerCtrl.input = null;
    });
  }
}