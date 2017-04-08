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
        .state('signUp', {
            url: '/signup',
            template: '<sign-up></sign-up>'
        })
        .state('applications', {
            url:'/applications',
            template:'<applications></applications>'
        })
        .state('applicationShow', {
            url: '/applications/:companyId/app/:appId',
            template: '<application-show></application-show>'
        })
        .state('userFavorite', {
            url:'/user/:id',
            template: '<user></user>'
        });
}
