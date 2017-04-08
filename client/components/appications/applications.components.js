const controller = require('./applications.controllers.js');
const template = require('./applications.html');

const Component ={
    controller: controller,
    template: template
};

angular
    .module('projectThree')
    .component('applications', Component);