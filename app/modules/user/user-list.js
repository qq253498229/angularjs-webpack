'use strict';

module.exports = ['$scope', function userListController($scope) {
    $scope.onInit = function () {
        console.log('hello user');
    };
    $scope.onInit();
}];


