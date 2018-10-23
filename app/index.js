require('angular');
require('angular-sanitize');
require('ngstorage');
require('@uirouter/angularjs');


require('./modules/user');
require('./modules/role');

const config = require('./common/config');
const appController = require('./common/controller');


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


