angular
    .module('projectThree')
    .service('ApplicationsService', ApplicationsService);

ApplicationsService.$inject = ['$http'];

function ApplicationsService($http) {
    const self = this;

    self.loadAll = loadAll;

    function loadAll() {
        return $http.get('/applications/');
    }
}