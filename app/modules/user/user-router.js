module.exports = function ($stateProvider,$urlRouterProvider) {
    $urlRouterProvider.otherwise('/app/userList');
    $stateProvider
        .state('app.userList', {
            url: '/userList',
            controller: require('./user-list'),
            template: require('./user-list.html')
        })
        .state('app.userEdit', {
            url: '/userEdit',
            controller: require('./user-edit'),
            template: require('./user-edit.html')
        })
    ;
};
