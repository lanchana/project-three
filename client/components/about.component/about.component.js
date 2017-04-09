const controller = require('./about.controller.js');
const template = require('./about.html.js');

const AboutComponent = {
	controller: controller,
	template: template

};

angular
	.module('projectThree')
	.component('about', AboutComponent);