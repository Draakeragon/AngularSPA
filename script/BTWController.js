         //var mainApp = angular.module("bookApp");
         
         bookApp.factory('MathService', function() {
            var factory = {}; //maak een va factory aan
            
            factory.multiply = function(a, b) {
               return a * 0.06 //uiteindelijk wordt de functie aangeroepen en wordt er 6% berekend
            }
            return factory; //return de factory
         });
         
         bookApp.service('CalcService', function(MathService){
            this.berekenBTW = function(a) {
               return MathService.multiply(a,a); //De service vermenigvuldigd met A met a
            }
         });
         
         bookApp.controller('BTWController', function($scope, CalcService) {
            $scope.berekenBTW = function() {
               $scope.result = CalcService.berekenBTW($scope.number); //de controller roept de Calcservice aan die dan de gegevens
            }                                                           //naar de factory(mathservice) stuurt om te rekenen.
         });