const controller = require('./home.controller.js');
const template = require('./home.html');

const Component = {
    controller: controller,
    template: template
};

angular
    .module('projectThree')
    .component('home', Component);