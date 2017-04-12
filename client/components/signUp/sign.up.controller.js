UserSignUpController.$inject=['UserService', '$state'];

function UserSignUpController(UserService, $state){
	const vm = this;

	vm.newUser = {};
	vm.createNewUser = CreateNewUser;
	vm.created = true;

	activate();
	function activate() {}

	function CreateNewUser(newUser){
		UserService
			.createNewUser(vm.newUser)
			.then(function toLogin(response){
				if(response.data.success){
				$state.go('login'); // if the user creation was complete, show the login view
				}
				else {
					vm.created = false;
					$state.go('signUp'); // if the user was unable to create the account log and error and stay on the sign up view
				}
		});
	}
}

module.exports = UserSignUpController;