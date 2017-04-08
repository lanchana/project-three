const controller = require('./application.show.controller.js');
const template = require('./application.show.html');

const Component = {
    controller: controller,
    template: template
};

angular
    .module('projectThree')
    .component('applicationShow', Component);
