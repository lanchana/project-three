UserFavoriteController.$inject = ['UserService', '$stateParams'];

function UserFavoriteController(UserService, $stateParams) {
    const vm =this;
    console.log('im in user controller: '+ $stateParams.id);
    // vm.userFavorite = userFavorite;
    // $rootScope.id = $stateParams.id;
    vm.id = $stateParams.id;
    vm.favApps = {}
    userFavorite();
    function userFavorite() {
        console.log('inside user fav');
        // console.log(vm.id);
        // console.log(id);
        UserService
            .favoriteApps(vm.id)
            .then(function resolve(response) {
                console.log(response.data.favoriteApp);
                vm.favApps = response.data.favoriteApp;
            });
    }

}

module.exports = UserFavoriteController;