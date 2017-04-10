angular
    .module('projectThree')
    .service('UserService', UserService);

UserService.$inject = ['$http'];

function UserService($http) {
    const self = this;

    self.newUser = {};
    self.createNewUser = createNewUser;
    self.checkUser = checkUser;
    self.updateUser = updateUser;
    self.loadCurrentUser = loadCurrentUser;
    self.deleteUser = deleteUser;

    function createNewUser (newUser) {
    	return $http.post('/api/user/', newUser);
    }

    function checkUser(currentUser) {
        console.log(currentUser);
        return $http.post('/api/sessions/login',currentUser);
    }

    function updateUser(user) {
        return $http.patch('/api/user/' + user._id, user);
    }

    function loadCurrentUser(id) {
        // console.log('user service says:' + id);
        return $http.get('/api/user/edit/' + id);
    }
    function deleteUser(user) {
        console.log("from delete user " + user._id)
        return $http.delete('/api/user/' +user._id);
    }
}

