var ngApp = angular.module('ngApp', [
    'ngRoute',
    'appControllers'
]);

ngApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/', {
                templateUrl: 'js/partials/front-page-tmpl.html',
                controller: 'homepage-ctrl',
                resolve: {
                    // I will cause a 1 second delay
                    delay: function($q, $timeout) {
                        var delay = $q.defer();
                        $timeout(delay.resolve, 1000);
                        $('.close-big-menu').trigger('click'); //TODO: FIND THE WAY TO CLOSE BIG MENU AUTOMATICALY
                        return delay.promise;
                    }
                }
            }).
            when('/productsandservices', {
                templateUrl: 'js/partials/products-and-services-tmpl.html',
                controller: 'prodsnsrvcs-ctrl',
                resolve: {
                    // I will cause a 1 second delay
                    delay: function($q, $timeout) {
                        var delay = $q.defer();
                        $timeout(delay.resolve, 1000);
                        $('.close-big-menu').trigger('click'); //TODO: FIND THE WAY TO CLOSE BIG MENU AUTOMATICALY
                        return delay.promise;
                    }
                }
            }).
            otherwise({
                redirectTo: '/'
            });
    }]);
