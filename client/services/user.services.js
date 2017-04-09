angular
    .module('projectThree')
    .service('UserService', UserService);

UserService.$inject = ['$http'];

function UserService($http) {
    const self = this;

    self.newUser = {};
    self.createNewUser = createNewUser;
    self.checkUser = checkUser;

    function createNewUser (newUser) {
    	return $http.post('/api/user/', newUser);
    }

    function checkUser(currentUser) {
        console.log(currentUser);
        return $http.post('/api/sessions/login',currentUser);
    }
}

