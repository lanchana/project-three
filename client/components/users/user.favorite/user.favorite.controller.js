UserFavoriteController.$inject = ['UserService', '$stateParams'];

function UserFavoriteController(UserService, $stateParams) {
    const vm =this;
    console.log('im in user controller: '+ $stateParams.id);
    vm.userFavorite = userFavorite;
    function userFavorite(id) {
        // console.log(id);
    }
}

module.exports = UserFavoriteController;