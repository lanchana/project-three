UserLogin.inject = ['$stateParams', 'UserService', '$state', '$scope'];

function UserLogin($stateParams, UserService, $state, $scope) {
    var vm = this;
    vm.checkUser = {};
    vm.invalid = false;
    vm.userLogin = userLogin;
    vm.id = {};

    function userLogin(currentUser) {
        UserService
            .checkUser(currentUser) // sets the user logging in to the sessions current user
            .then(function resolve(response){  // If there is an error, log error and go back to login view.
                if(response.data.message) {
                    vm.checkUser = {};       
                    vm.invalid = true;
                    $state.go('login');

                } else if(response.data.currentUser) { // If a current user is returned, 
                    vm.invalid = false;
                    vm.id = response.data.currentUser._id;
                    $state.go('user', ({id: vm.id}));  // Goes to the users favorites view via the ID.
                }
        });
    }
}

module.exports = UserLogin;