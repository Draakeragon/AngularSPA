        // var mainApp = angular.module("bookApp");
         
         bookApp.factory('MathService', function() {
            var factory = {};
            
            factory.multiply = function(a, b) {
               return a * 0.06
            }
            return factory;
         });
         
         bookApp.service('CalcService', function(MathService){
            this.berekenBTW = function(a) {
               return MathService.multiply(a,a);
            }
         });
         
         bookApp.controller('BTWController', function($scope, CalcService) {
            $scope.berekenBTW = function() {
               $scope.result = CalcService.berekenBTW($scope.number);
            }
         });