UserEditController.$inject = ['$state', 'UserService', '$stateParams'];

function UserEditController($state, UserService, $stateParams) {
  // const id = $stateParams.id
  const vm = this;
  vm.userId = $stateParams.id;
console.log("userEdit: " +$stateParams.id);
  // vm.updatedUser = {};
  vm.editUser = editUser;
  vm.deleteUser = deleteUser;
  vm.current = {};

  activate();
  function activate(){
    UserService
      .loadCurrentUser($stateParams.id)
      .then(function resolve(response) {
        console.log("user edit response" +response.data.user);
        vm.current = response.data.user;
        console.log(vm.current);
      });
  }

  function editUser(user) {
    console.log(user);
    UserService
    .updateUser(user)
    .then(function(response) {
      $state.go('user',({id: vm.userId}));
    });
  }
  function deleteUser(user) {
    console.log("deleteController" + user);
    UserService
    .deleteUser(user)
    .then(function(response) {
      console.log('back from server!!!!');
      $state.go('home');
    });
  }
}
module.exports = UserEditController;