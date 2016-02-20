angular.module('vandeBron')
    .service('subscriptionService', ['$http', function ($http, Api) {
        'use strict';
        return {
            getSubscriptions: getSubscriptions,
            postSubscription: postSubscription
        };

        function getSubscriptions() {
            return $http.get(Api.url + '/api/subscriptions');
        }

        function postSubscription() {
            console.log(Api);
            return $http.post(Api.url + '/api/subscriptions');
        }
    }]);
