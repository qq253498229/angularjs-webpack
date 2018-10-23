'use strict';

angular.module('app', [
    'ngSanitize',
    'ui.router',
    'oc.lazyLoad',
    'ngStorage',
])
    .run(
        ['$rootScope', '$state', '$stateParams',
            function ($rootScope, $state, $stateParams) {
                $rootScope.$state = $state;
                $rootScope.$stateParams = $stateParams;
            }])
    .controller("AppCtrl", require('./controller'))
;
