UserLogin.inject = ['$stateParams', 'UserService', '$state'];

function UserLogin($stateParams, UserService, $state) {
    var vm = this;
    vm.checkUser = {};
    vm.invalid = false;
    vm.userLogin = userLogin;

    function userLogin(currentUser) {
        console.log(currentUser);
        UserService.checkUser(currentUser)
            .then(function resolve(response){
                console.log(response.data);
                if(response.data.message) {
                    console.log(response.data.message);
                    vm.checkUser = {};
                    vm.invalid = true;
                    $state.go('login');

                } else if(response.data.user) {
                    vm.invalid = false;
                    var id =response.data.user._id;
                    $state.go('user',({id: id}));
                    // console.log(response.data.user);
                    // UserFavoriteController.userFavorite(id);
                }
            });
    }
}

module.exports = UserLogin;