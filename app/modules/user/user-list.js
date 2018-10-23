'use strict';

module.exports = angular.module('app')
    .controller('userListCtrl', ['$scope', userListController]);

function userListController($scope) {
    $scope.onInit = function () {
        console.log('hello user');
    };
    $scope.onInit();
}
