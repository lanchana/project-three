angular
    .module('projectThree')
    .service('UserService', UserService);

UserService.$inject = ['$http'];

function UserService($http) {
    const self = this;

    self.createNewUser = createNewUser;

    function createNewUser(newUser) {
        console.log("add user");
    }
}