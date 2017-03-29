var bookApp = angular.module('bookApp', ['ngRoute', 'bookApp.filters']);
//Gebruikt de filter als dependency.  bookApp.filters'

bookApp.config(function($routeProvider) {

    $routeProvider.when('/admin', {    //Kijkt naa de URL via de geklikte <a href> 
            templateUrl: 'views/admin.html',
            controller: 'bookController' //Alle ng-views worden runtime ingeladen en hebben hun eigen controller.
        })
        .when('/uitgeverij', {
            templateUrl: 'views/uitgever.html',
            controller:  'uitgeverijController'
        })
        .when('/categorie', {
            templateUrl: 'views/categorie.html',
            controller:  'categorieController'
        })
         .when('/leeftijd', {
            templateUrl: 'views/leeftijd.html',
            controller:  'leeftijdController'
        })
        .when('/login', {
            templateUrl: 'views/login.html',
            controller: 'logincontroller'
        })
        .when('/testfactoryservice', {
            templateUrl: 'views/testservicefactory.html',
            controller: 'BTWController'
        })
        .otherwise({
            redirectTo: '/login' //Als je een fout maakt of een link klikt die nergens naartoe gaat dan ga je standaard naar de boeken pagina
        });

});