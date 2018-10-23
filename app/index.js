require('angular');
require('angular-sanitize');
require('angular-animate');
require('angular-touch');
require('ngstorage');
require('@uirouter/angularjs');
require('angular-ui-bootstrap');
require('./modules/user');
require('./modules/role');

config = require('./common/config');
appController = require('./common/controller');


angular.module('app', [
    'ngSanitize',
    'ui.router',
    'ngStorage',
    'ui.bootstrap',
    'user',
    'role'
])
    .run(['$rootScope', '$state', '$stateParams',
        function ($rootScope, $state, $stateParams) {
            $rootScope.$state = $state;
            $rootScope.$stateParams = $stateParams;
        }])
    .config(config.routing)
    .config(config.compile)
    .controller("AppCtrl", appController)
;


