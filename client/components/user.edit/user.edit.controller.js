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
      .loadCurrentUser($stateParams.id)   // This function loads the user's edit information based off of the user's id.
      .then(function resolve(response) {

        vm.current = response.data.user;
        vm.current.password= '';
      });
  }

  function editUser(user) {  // patch route for the user edit changes
    UserService
	    .updateUser(user)
	    .then(function(response) {
      $state.go('user',({id: vm.userId}));
    });
  }

  function deleteUser(user) {  // delete route to completely remove the user from the database
    UserService
	    .deleteUser(user)
	    .then(function(response) {
      $state.go('home');
    });
  }
}

module.exports = UserEditController;