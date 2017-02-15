'use strict';

angular.module('body', []);
angular.module('body')
    .directive('staticHeader', function() {
        return {
            restrict: 'E',
            templateUrl: '/templates/static-header.html',
            replace: true
        }
    })
    .directive('staticFooter', function() {
        return {
            restrict: 'E',
            templateUrl: '/templates/static-footer.html',
            replace: true
        }
    });