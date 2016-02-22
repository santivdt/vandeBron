angular.module('vandeBron')
    .directive('navbar', function () {
        'use strict';
        return {
            templateUrl: '/partials/navbar.html',
            restrict: 'EA',
            controller: 'navbarCtrl',
            controllerAs: 'navbar',
            link: function (scope, element, attrs) {
            }
        };
    });