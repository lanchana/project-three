angular
    .module('projectThree')
    .service('ApplicationsService', ApplicationsService);

ApplicationsService.$inject = ['$http'];

function ApplicationsService($http) {
    const self = this;

    self.loadAll = loadAll;
    self.loadCurrent =loadCurrent;

    function loadAll() {
        return $http.get('/api/applications/');
    }

    function loadCurrent(id) {
        return $http.get('/api/applications/')
    }

}