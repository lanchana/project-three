UserFavoriteController.$inject = ['UserService'];

function UserFavoriteController(UserService) {
    const vm =this;
    console.log('im in user controller');
}

module.exports = UserFavoriteController;