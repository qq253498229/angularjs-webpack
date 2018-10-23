module.exports = ['$stateProvider',
    function ($stateProvider) {
        $stateProvider
            .state('app.roleList', {
                url: '/roleList',
                controller: require('./role-list'),
                template: require('./role-list.html')
            });
    }];
