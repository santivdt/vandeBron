angular.module('vandeBron')
    .service('subscriptionService', ['$http', 'Api', function ($http, Api) {
        'use strict';
        return {
            getSubscriptions: getSubscriptions,
            postSubscription: postSubscription
        };

        //list all subscriptions
        function getSubscriptions() {
            return $http.get(Api.url + '/api/subscriptions');
        }

        //post a subscriber to the api
        function postSubscription(data) {
            return $http.post(Api.url + '/api/subscriptions', data);
        }
    }]);
