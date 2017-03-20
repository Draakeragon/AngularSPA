var bookApp = angular.module('bookApp', ['ngRoute']);

bookApp.config(function($routeProvider) {

    $routeProvider.when('/boeken', {
            templateUrl: 'views/boeken.html',
            controller: 'bookController'
        })
        .when('/admin', {
            templateUrl: 'views/admin.html',
            controller: 'bookController'
        })
        .when('/login', {
            templateUrl: 'views/login.html',
            controller: 'bookController'
        })
        .otherwise({
            redirectTo: '/boeken'
        });

});