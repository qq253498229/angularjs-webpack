module.exports = function ($stateProvider) {
    $stateProvider
        .state('user', {
            url: '/user',
            controller: require('./user-list'),
            template: require('./user-list.html')
        });
};
