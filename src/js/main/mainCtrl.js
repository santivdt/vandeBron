angular.module('vandeBron')
    .controller('mainCtrl', function ($scope, $state, subscriptionService) {

    $scope.submitForm = function () {
        //transform form data to right format
        var user = {
            "name": ($scope.user.firstName + ' ' + $scope.user.lastName),
            "gender": $scope.user.gender,
            "email": $scope.user.email,
            "phone": $scope.user.phone,
            "address": [{
                "number": $scope.user.houseNumber,
                "street": $scope.user.street,
                "city": $scope.user.city,
                "zipcode": $scope.user.zipCode
            }]
        };

        //send data to the (mock-Api)
        subscriptionService.postSubscription(user)
            .success(function (data) {
                $scope.name = data.name;
                localStorage.setItem('data', JSON.stringify(data));
                $state.go('success');
            })
            .error(function (error) {
                console.log('Error: ' + error);
                $state.go('error');
            });
    }

});