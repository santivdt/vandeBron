angular.module('vandeBron')
    .controller('successCtrl', function ($scope) {

        $scope.user = JSON.parse(localStorage.getItem('data'));

    });