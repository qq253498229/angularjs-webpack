require('angular');
require('angular-sanitize');
require('ngstorage');
require('@uirouter/angularjs');


user = require('./modules/user');
role = require('./modules/role');

const config = require('./config');
const appController = require('./controller');


angular.module('app', [
    'ngSanitize',
    'ui.router',
    'ngStorage',
    'user',
    'role'
])
    .run(
        ['$rootScope', '$state', '$stateParams',
            function ($rootScope, $state, $stateParams) {
                $rootScope.$state = $state;
                $rootScope.$stateParams = $stateParams;
            }])
    .config(config.routing)
    .controller("AppCtrl", appController)
;


