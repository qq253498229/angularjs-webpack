module.exports.routing = ['$locationProvider', '$stateProvider', '$urlRouterProvider',
    function ($locationProvider, $stateProvider, $urlRouterProvider) {
        // $locationProvider.html5Mode(true);
        $urlRouterProvider.otherwise('/app/userList');
        $stateProvider
            .state('app', {
                abstract: true,
                url: '/app',
                template: require('./layout.html')
            });
    }];
