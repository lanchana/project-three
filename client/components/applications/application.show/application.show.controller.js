ApplicationShowController.$inject = ['$stateParams', 'ApplicationsService', '$state'];

function ApplicationShowController($stateParams, ApplicationsService, $state) {
    const vm = this;
    activate();

    vm.userId = $stateParams.userId;
    vm.addFav = addFav;

    function activate() {
        loadCurrentApplication();
    }

    function loadCurrentApplication() {
        console.log($stateParams);
        ApplicationsService
            .loadCurrent($stateParams.companyId, $stateParams.appId )
            .then(function resolve(response) {
                console.log("app Show" + response.data.app);
                vm.current = response.data.app;
           });
    }

    function addFav() {
        ApplicationsService
            .userFav($stateParams.companyId, $stateParams.appId, $stateParams.userId);
            $state.go('applications',({id: vm.userId}));
            // 'user',({id: vm.id})
            // .then(function resolve(response) {
            //     console.log(response);
            // });
    }
}

module.exports = ApplicationShowController;