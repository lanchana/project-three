UserSignUpController.$inject=['UserService', '$state'];

function UserSignUpController(UserService, $state){
	const vm = this;

	vm.newUser = {};
	vm.createNewUser = CreateNewUser;

	activate();
	function activate() {}

	function CreateNewUser(newUser){		
		UserService
			.createNewUser(vm.newUser)
			.then(function toLogin(){
				$state.go('login')  // Name of the state might change, come back to match up state names
		});
	}
}

module.exports = UserSignUpController;