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
                    controller: 'userListCtrl',
                    template: require('./modules/user/user-list.html'),
                    resolve: {
                        loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load(['UserListModule']);
                        }]
                    }
                })
                .state('role', {
                    url: '/role',
                    template: require('./modules/role/role-list.html')
                })
            ;
        }])
;
