module.exports.routing = ['$stateProvider', '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {
        // $locationProvider.html5Mode(true);
        $urlRouterProvider.otherwise('/user');
    }]
;
