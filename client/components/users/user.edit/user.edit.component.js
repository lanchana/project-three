const controller = require('./user.edit.controller.js');
const template = require('./user.edit.html');

const Component = {
  controller: controller,
  template: template
};

angular
  .module('projectThree')
  .component('userEdit', Component);
