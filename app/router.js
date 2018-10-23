'use strict';

angular.module('app')
    .config(['$stateProvider', '$urlRouterProvider', '$ocLazyLoadProvider',
        function ($stateProvider, $urlRouterProvider, $ocLazyLoadProvider) {

            $ocLazyLoadProvider.config({
                modules: [
                    {
                        name: 'UserListModule',
                        files: ['app/modules/user/user-list.js']
                    }
                ]
            });
            // $locationProvider.html5Mode(true);
            $urlRouterProvider.otherwise('/user');
            $stateProvider
                .state('user', {
                    url: '/user',
                    controller: require('./modules/user/user-list'),
                    template: require('./modules/user/user-list.html')
                })
                .state('role', {
                    url: '/role',
                    template: require('./modules/role/role-list.html')
                })
            ;
        }])
;
