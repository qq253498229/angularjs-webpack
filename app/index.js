require('angular');
require('angular-sanitize');
require('angular-animate');
require('angular-touch');
require('ngstorage');
require('@uirouter/angularjs');


require('./modules/user');
require('./modules/role');

config = require('./common/config');
appController = require('./common/controller');


angular.module('app', [
    'ngSanitize',
    'ui.router',
    'ngStorage',
    'user',
    'role'
])
    .run(['$rootScope', '$state', '$stateParams',
        function ($rootScope, $state, $stateParams) {
            $rootScope.$state = $state;
            $rootScope.$stateParams = $stateParams;
        }])
    .config(config.routing)
    .controller("AppCtrl", appController)
;


