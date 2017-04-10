UserEditController.$inject = ['$state', 'UserService', '$stateParams'];

function UserEditController($state, UserService, $stateParams) {
  // const id = $stateParams.id
  const vm = this;
  vm.userId = $stateParams.id;
console.log("userEdit: " +$stateParams.id);
  // vm.updatedUser = {};
  vm.editUser = editUser;
  vm.current = {};

  activate();
  function activate(){
    UserService
      .loadCurrentUser($stateParams.id)
      .then(function resolve(response) {
        console.log("user edit response" +response);
        vm.current = response.data.user;
        console.log(vm.current);
      });
  }

  function editUser(user) {
    console.log(user);
    UserService
    .updateUser(user)
    .then(function(response) {
      $state.go('user');
    });
  }
}
module.exports = UserEditController;
