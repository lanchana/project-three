UserController.$inject = ['UserService'];

function UserController(UserService) {
    const vm =this;
    console.log('im in user controller');
}

module.exports = UserController;