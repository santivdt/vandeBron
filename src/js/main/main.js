angular.module('vandeBron')
    .config(function($stateProvider) {
        'use strict';
        $stateProvider
            .state('main', {
                url: '/',
                templateUrl: '../../partials/main.html',
                controller: 'mainCtrl',
                controllerAs: 'main'
            });
    });