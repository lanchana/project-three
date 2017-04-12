UserFavoriteController.$inject = ['UserService', '$stateParams'];

function UserFavoriteController(UserService, $stateParams) {
    const vm = this;
    const id = $stateParams.id;

    vm.userId = id;
    vm.id = id;
    vm.userFavDelete = userFavDelete;
    vm.deleteSession = deleteSession;
    vm.favApps = {}

    activate();

    function activate() {
        UserService
            .loadAllFavorites(id)
            .then(function resolve(response) {
                vm.favApps = response.data.favoriteApp;
            });
    }

    function userFavDelete(userId, favId) {
        UserService
            .removeFavorite(userId, favId)
            .then(function(response) {
                activate();
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