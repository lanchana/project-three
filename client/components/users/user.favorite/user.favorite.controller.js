UserFavoriteController.$inject = ['UserService', '$stateParams'];

function UserFavoriteController(UserService, $stateParams) {
    const vm =this;
    vm.userId = $stateParams.id;
    console.log("userFav: "+$stateParams.id);
    console.log('im in user controller: '+ $stateParams.id);
    vm.userFavorite = userFavorite;
    function userFavorite(id) {
        // console.log(id);
    }
}

module.exports = UserFavoriteController;
