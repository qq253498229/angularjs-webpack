'use strict';
angular.module('app', [
    'ngSanitize',
    'oc.lazyLoad',
    'ngStorage'
])
    .controller("AppCtrl", require('./controller'))
;
