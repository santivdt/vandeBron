angular
    .module('vandeBron', [
        'ui.router',
        'ngMaterial',
        'ngMessages'
    ])
    .config(function($urlRouterProvider, $locationProvider) {
        'use strict';
        $urlRouterProvider
            .otherwise('/');

        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        })
    })
    .constant("Api",  {
        "url": "http://private-d6dff-vandebron.apiary-mock.com"
    });