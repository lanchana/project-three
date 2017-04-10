UserLogin.inject = ['$stateParams', 'UserService', '$state', '$scope'];

function UserLogin($stateParams, UserService, $state, $scope) {
    var vm = this;
    vm.checkUser = {};
    vm.invalid = false;
    vm.userLogin = userLogin;
    $scope.In = 'blah';
    vm.id = {};

    function userLogin(currentUser) {
        UserService.checkUser(currentUser)
            .then(function resolve(response){
                if(response.data.message) {
                    vm.checkUser = {};
                    vm.invalid = true;
                    $state.go('login');

                } else if(response.data.user) {
                    vm.invalid = false;
                    vm.userLogedIn = true;
                    vm.id =response.data.user._id;
                    $state.go('user',({id: vm.id}));
                }
        });
    }
}

module.exports = UserLogin;