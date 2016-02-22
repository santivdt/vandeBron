angular.module('vandeBron')
    .config(function($stateProvider) {
        'use strict';
        $stateProvider
            .state('success', {
                url: '/success',
                templateUrl: '../../partials/success.html',
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
                controller: 'successCtrl',
                controllerAs: 'success'
            });
    });