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
            .loadCurrent($stateParams.appId)
            .then(function resolve(response) {
                console.log(response.data);
            });
    }
}

module.exports = ApplicationShowController;