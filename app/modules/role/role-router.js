module.exports = function ($stateProvider) {
    $stateProvider
        .state('role', {
            url: '/role',
            controller: require('./role-list'),
            template: require('./role-list.html')
        });
};
