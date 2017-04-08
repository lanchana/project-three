angular
    .module('projectThree')
    .service('UserService', UserService);

UserService.$inject = ['$http'];

function UserService($http) {
    const self = this;

    self.newUser = {};
    self.createNewUser = createNewUser;

    function createNewUser (newUser) {
    	return $http.post('/api/user/', newUser);
    }
}

