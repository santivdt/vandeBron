angular.module('vandeBron')
    .controller('errorCtrl', function ($scope, $state) {

        $scope.goMain = function() {
            $state.go('main');
        };
    });