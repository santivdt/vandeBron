'use strict';

angular.module('vandeBron')
    .config(function($stateProvider) {
        $stateProvider
            .state('main', {
                url: '/',
                templateUrl: '../../partials/main.html',
                controller: 'mainCtrl',
                controllerAs: 'main'
            });
    });