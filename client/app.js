const angular = require('angular');
require('angular-ui-router');

angular
    .module('projectThree', ['ui.router'])
    .config(uiRouterSetup);

uiRouterSetup.$inject = ['$stateProvider', '$urlRouterProvider'];

function uiRouterSetup($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('home', {
            url: '/',
            template: '<home></home>'
        })
        .state('applications', {
            url:'/applications',
            teplate:'<applications></applications>'
        })
        .state('user', {
            url:'/user/:id',
            template: '<user></user>'
        });
}
