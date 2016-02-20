'use strict';

angular.module('vandeBron')
    .directive('tableSubscriptions', function () {
        return {
            templateUrl: '/partials/tableSubscriptions.html',
            restrict: 'EA',
            link: function (scope, element, attrs) {
            }
        };
    });