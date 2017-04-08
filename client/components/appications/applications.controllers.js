ApplicationsController.$inject =['ApplicationsService'];

function ApplicationsController(ApplicationsService) {
    const vm = this;
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