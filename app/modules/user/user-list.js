module.exports = function ($scope, $state) {
    $scope.onInit = function () {
        console.log('hello user');
    };
    $scope.onInit();

    $scope.edit = function () {
        $state.go('app.userEdit');
    }
};


