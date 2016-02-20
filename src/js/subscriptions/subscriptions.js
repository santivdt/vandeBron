'use strict';

angular.module('vandeBron')
    .config(function($stateProvider) {
        $stateProvider
            .state('subscriptions', {
                url: '/subscriptions',
                templateUrl: '../../partials/subscriptions.html',
                controller: 'subscriptionsCtrl',
                controllerAs: 'subscription'
            });
    });
