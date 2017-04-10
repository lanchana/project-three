UserFavoriteController.$inject = ['UserService', '$stateParams'];

function UserFavoriteController(UserService, $stateParams) {
    const vm =this;
    console.log('im in user controller: '+ $stateParams.id);
    // vm.userFavorite = userFavorite;
    // $rootScope.id = $stateParams.id;
    vm.id = $stateParams.id;
    vm.userFavDelete = userFavDelete;
    vm.deleteSession = deleteSession;
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

    function userFavDelete(userId, favId) {
        // console.log('i am in delete'+userId+": "+favId);
        UserService.favDelete(userId, favId)
            .then(function(response) {

                userFavorite();
            });
            // .then(function resolve(response) {
                // console.log(response);
            // });
    }

    function deleteSession() {
        console.log("i am in delete session");
        UserService.deleteSessions()
            .then((response) => {
                console.log(response);
            });
    }

}

module.exports = UserFavoriteController;