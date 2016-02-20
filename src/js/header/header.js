'use strict';

angular.module('vandeBron')
    .directive('header', function () {
        return {
            templateUrl: '/partials/header.html',
            restrict: 'EA',
            link: function (scope, element, attrs) {
            }
        };
    });