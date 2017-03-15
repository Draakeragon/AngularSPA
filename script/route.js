var app = angular.module('myApp', ['ngRoute']);

app.config(['$locationProvider', function($locationProvider) {
  $locationProvider.hashPrefix('');


app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/admin', {
            templateUrl: '../views/admin.html'
        })
            .when('/boeken', {
            templateUrl: 'views/boeken.html'
        })
            .when('/login', {
            templateUrl: 'views/login.html'
        })
        .otherwise({ redirectTo: '/' });

  }])
}]);
