var ButtonComponent = ng.core.Component({
  selector: 'ng2-button',
  template: '<button (click)="click()">Click me {{count}}</button>'
}).Class({
  constructor: function () {
    this.count = 0;
  },
  click: function () {
    this.count += 1;
  }
});

document.addEventListener('DOMContentLoaded', function () {
  ng.platformBrowserDynamic.bootstrap(ButtonComponent);
});
