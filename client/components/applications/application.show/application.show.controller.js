ApplicationShowController.$inject = ['$stateParams', 'ApplicationsService', '$state'];

function ApplicationShowController($stateParams, ApplicationsService, $state) {
    const vm = this;
    activate();

    vm.userId = $stateParams.userId;
    vm.addFav = addFav;

    function activate() {
        loadCurrentApplication();
    }

// Display the view page for the selected application.
    function loadCurrentApplication() {
        ApplicationsService
            .loadCurrent($stateParams.companyId, $stateParams.appId)
            .then(function resolve(response) {
                vm.current = response.data.app;
           });
    }

// add current application to your favorites.
    function addFav() {
        ApplicationsService
            .userFav($stateParams.companyId, $stateParams.appId, $stateParams.userId);
            $state.go('userApplications',({id: vm.userId}));
    }
}

module.exports = ApplicationShowController;