module.exports = ['$stateProvider',
    function ($stateProvider) {
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
    }];
