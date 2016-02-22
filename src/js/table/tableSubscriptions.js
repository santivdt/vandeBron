angular.module('vandeBron')
    .directive('tableSubscriptions', function () {
        'use strict';
        return {
            templateUrl: '/partials/tableSubscriptions.html',
            restrict: 'EA',
            link: function (scope, element, attrs) {
            }
        };
    });