router = require('./user-router');
userListController = require('./user-list');

module.exports = angular.module('user', [])
    .config(router)
    .controller('userListController', userListController)
;
