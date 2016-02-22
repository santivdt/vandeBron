angular.module('vandeBron')
    .config(function($stateProvider) {
        'use strict';
        $stateProvider
            .state('subscriptions', {
                url: '/subscriptions',
                resolve: {
                    subscriptions:  function(subscriptionService){
                        return subscriptionService.getSubscriptions()
                            .success(function (data) {
                                return data;
                            })
                            .error(function (error) {
                                console.log('Error: ' + error);
                            });
                    }
                },
                templateUrl: '../../partials/subscriptions.html',
                controller: 'subscriptionsCtrl',
                controllerAs: 'subscription'
            });
    });