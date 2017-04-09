UserFavoriteController.$inject = ['$stateParams', 'UserService'];

function UserFavoriteController($stateParams, UserService) {
    const vm =this;

    vm.current = {};

    activate();

    function activate() {
      loadCurrentUser();
    }
  function loadCurrentUser() {
    UserService.loadCurrentUser($stateParams.userId)
    .then(function resolve(response) {
        vm.current = response.data.user;
    });
  }
}

module.exports = UserFavoriteController;
