router = require('./role-router');
roleListController = require('./role-list');

module.exports = angular.module('role', [])
    .config(router)
    .controller('roleListController', roleListController)
;
