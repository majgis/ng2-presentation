var ButtonComponent = ng.core.Component({
  selector: 'ng2-button',
  template: '<button>Click me</button>'
}).Class({
  constructor: function () {
  }
});

document.addEventListener('DOMContentLoaded', function () {
  ng.platformBrowserDynamic.bootstrap(ButtonComponent);
});
