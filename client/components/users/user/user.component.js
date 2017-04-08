const controller = require('./user.controller.js');
const template = require('./user.html');

const Component = {
    controller: controller,
    template: template
};

angular
    .module('projectThree')
    .component('user', Component);