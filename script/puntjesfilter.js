var filtersModule = angular.module('testApp.filters', []);

filtersModule.filter('puntjesFilter', function() {
        return function(input) {
            return "Hallo Wereld!.......";

            if(input == undefined)
            {
                input = "";
            }   
        
            while(input.length < 20)
            {
                input += ".";
            }

            return input;
        };
});