angular.module('vandeBron')
    .controller('subscriptionsCtrl', function ($scope, subscriptions) {

        //bind data from resolve to scope
        $scope.subscriptions = subscriptions.data;


    });


