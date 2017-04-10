angular
    .module('projectThree')
    .service('UserService', UserService);

UserService.$inject = ['$http'];

function UserService($http) {
    const self = this;

    self.newUser = {};
    self.createNewUser = createNewUser;
    self.checkUser = checkUser;
    self.favoriteApps = favoriteApps;

    function createNewUser (newUser) {
    	return $http.post('/api/user/', newUser);
    }

    function checkUser(currentUser) {
        console.log(currentUser);
        return $http.post('/api/sessions/login',currentUser);
    }

    function favoriteApps(id) {
        console.log('user services: '+id);
        return $http.get('/api/applications/user/'+id);
    }
}

