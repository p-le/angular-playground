export class InputLabel {
  constructor() {
    this.restrict = 'E';
    this.require = '^?plInputContainer';
  }

  link(scope, element, attr, containerCtrl) {
    if (!containerCtrl) return;
    containerCtrl.label = element;
    scope.$on('$destroy', () => containerCtrl.label = null);
  }
}