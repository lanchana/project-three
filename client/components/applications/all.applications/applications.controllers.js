ApplicationsController.$inject =['ApplicationsService', '$stateParams'];

function ApplicationsController(ApplicationsService, $stateParams) {
    const vm = this;
    vm.userId = $stateParams.id;
    if(vm.userId){
    console.log("app cntr" +vm.userId);
}
    activate();
    function activate() {
        loadAllApplications();
    }
    console.log('im in apllication controller');

    function loadAllApplications() {
        ApplicationsService
            .loadAll()
            .then(function resolve(response) {
                console.log('im in apllication controller');
                console.log(response.data.companies);
                vm.companies = response.data.companies;
            })
    }
}

module.exports = ApplicationsController;