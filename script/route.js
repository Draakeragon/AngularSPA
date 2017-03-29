var bookApp = angular.module('bookApp', ['ngRoute', 'bookApp.filters']);
//Gebruikt de filter als dependency.  bookApp.filters'

bookApp.config(function($routeProvider) {

    $routeProvider.when('/boeken', {    //Kijkt naa de URL via de geklikte <a href> 
            templateUrl: 'views/boeken.html',
            controller: 'bookController' //Alle ng-views worden runtime ingeladen en hebben hun eigen controller.
        })
        .when('/admin', {
            templateUrl: 'views/admin.html',
            controller: 'bookController' //Admin en boeken gebruiken dezelfde controller omdat ik anders code moet kopiëren. in slechts 1 pagina kan worden CUD 
        })
        .when('/uitgeverij', {
            templateUrl: 'views/uitgever.html',
            controller:  'uitgeverijController'
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
            redirectTo: '/boeken' //Als je een fout maakt of een link klikt die nergens naartoe gaat dan ga je standaard naar de boeken pagina
        });

});