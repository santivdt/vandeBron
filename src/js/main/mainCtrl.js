angular.module('vandeBron')
    .controller('mainCtrl', function ($scope, subscriptionService) {

    $scope.submitForm = function () {
        console.log('Submitting form -->', $scope.user);
        subscriptionService.postSubscription($scope.user)
            .success(function (data) {
                console.log(data);
                $scope.name = data.name;
            })
            .error(function (error) {
                console.log('Error: ' + error);
            });
    }

});