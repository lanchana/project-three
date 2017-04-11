UserEditController.$inject = ['$state', 'UserService', '$stateParams'];

function UserEditController($state, UserService, $stateParams) {
  const vm = this;

  vm.userId = $stateParams.id;
  vm.editUser = editUser;
  vm.deleteUser = deleteUser;
  vm.current = {};

  activate();

  function activate(){
    UserService
      .loadCurrentUser($stateParams.id)
      .then(function resolve(response) {

        vm.current = response.data.user;
        vm.current.password= '';
      });
  }

  function editUser(user) {
    UserService
    .updateUser(user)
    .then(function(response) {
      $state.go('user',({id: vm.userId}));
    });
  }

  function deleteUser(user) {
    UserService
    .deleteUser(user)
    .then(function(response) {
      $state.go('home');
    });
  }
}

module.exports = UserEditController;