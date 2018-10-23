module.exports = ['$scope', '$rootScope', '$transitions',
    function ($scope, $rootScope, $transitions) {
        $scope.onInit = function () {
            console.log('hello app');
        };
        $scope.onInit();
        $transitions.onSuccess({}, function (transition) {
            $scope.url = transition.to().name;
            console.log($scope.url);
        });
    }];
