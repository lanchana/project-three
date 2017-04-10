UserFavoriteController.$inject = ['UserService', '$stateParams'];

function UserFavoriteController(UserService, $stateParams) {
    const vm = this;
    const id = $stateParams.id;
    
    vm.userId = id;
    vm.id = id;
    vm.userFavDelete = userFavDelete;
    vm.deleteSession = deleteSession;
    vm.favApps = {}

    userFavorite();

    function userFavorite() {
        UserService
            .favoriteApps(id)
            .then(function resolve(response) {
                vm.favApps = response.data.favoriteApp;
            });
    }

    function userFavDelete(userId, favId) {
        UserService
            .favDelete(userId, favId)
            .then(function(response) {
                userFavorite();
            });
    }

    function deleteSession() {
        UserService.deleteSessions()
            .then((response) => {
                console.log(response);
            });
    }

}

module.exports = UserFavoriteController;