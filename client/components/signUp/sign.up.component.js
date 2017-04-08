const controller = require('./sign.up.controller.js');
const template = require('./sign.up.html');

const Component = {
	controller: controller,
	template: template
}

angular
	.module('projectThree')
	.component('signUp', Component);