ApplicationShowController.$inject = ['$stateParams', 'ApplicationsService'];

function ApplicationShowController($stateParams, ApplicationsService) {
    const vm = this;
    activate();

    function activate() {
        loadCurrentApplication();
    }

    function loadCurrentApplication() {
        console.log($stateParams);
        ApplicationsService
            .loadCurrent($stateParams.companyId, $stateParams.appId)
            .then(function resolve(response) {
                console.log("app Show" + response.data.app);
                vm.current = response.data.app;
            })
    }
}

module.exports = ApplicationShowController;