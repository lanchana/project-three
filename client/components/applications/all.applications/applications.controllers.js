ApplicationsController.$inject =['ApplicationsService', '$stateParams'];

function ApplicationsController(ApplicationsService, $stateParams) {
    const vm = this;
    vm.userId = $stateParams.id;
    if(vm.userId){
}
    activate();
    function activate() {
        loadAllApplications();
    }

    function loadAllApplications() {
        ApplicationsService
            .loadAll()
            .then(function resolve(response) {
                vm.companies = response.data.companies;
            })
    }
}

module.exports = ApplicationsController;