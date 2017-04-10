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
    self.favDelete = favDelete;
    self.deleteSessions = deleteSessions;

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

    function favDelete(userId, favId) {
        console.log('in user service');
        // return 'blah';
        return $http.delete('/api/applications/user/'+userId+'/fav/'+favId);
    }

    function deleteSessions() {
        return $http.delete('/api/sessions/');
    }
}

