angular.module('vandeBron')
    .config(function($stateProvider) {
        'use strict';
        $stateProvider
            .state('error', {
                url: '/error',
                templateUrl: '../../partials/error.html',
                controller: 'errorCtrl',
                controllerAs: 'error'
            });
    });