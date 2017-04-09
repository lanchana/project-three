const controller = require('./user.favorite.controller.js');
const template = require('./user.favorite.html');

const Component = {
    controller: controller,
    template: template
};

angular
    .module('projectThree')
    .component('userFavorite', Component);
