'use strict';

angular.module('body', []);
angular.module('body')
    .directive('staticHeader', function() {
        return {
            restrict: 'E',
            templateUrl: '/templates/static-header.html',
            replace: true,
            compile: function (elem, attrs) {
                var path_ = window.location.pathname;
                if (path_ !== '' || null || undefined) {
                    var links = angular.element(elem).find(".nav-link");
                    angular.forEach(links, function (link) {
                        if (angular.element(link).attr("href") == path_) {
                            angular.element(link).parent().addClass("active");
                            return false;
                        }
                    });
                }
            }
        }
    })
    .directive('staticFooter', function() {
        return {
            restrict: 'E',
            templateUrl: '/templates/static-footer.html',
            replace: true
        }
    })
    .directive('dummyText', function() {
        return {
            restrict: 'E',
            templateUrl: '/templates/dummy-text.html',
            replace: true
        }
    })
    .directive('privacyPolicy' ,function() {
        return {
            restrict: 'E',
            templateUrl: '/templates/privacy-policy.html',
            replace: true
        }
    })
    .directive('securityPolicy' ,function() {
        return {
            restrict: 'E',
            templateUrl: '/templates/security-policy.html',
            replace: true
        }
    });