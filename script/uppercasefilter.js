var bookAppFilters = angular.module('bookApp.filters', []);
//Filter is een module
bookAppFilters.filter('makeUppercase', function () {
    
    return function (item) { //Heet MakeUppercase.
        if(item !== null && item.length > 0)
        { //Als een item niet null of undefined is en de lengte is groter dan 0.
        return item.toUpperCase();
        } // Dan return je het item uppercase
        
        else 
        {
            return "Onbekend"; //Anders return je het woord Onbekend om toch iets te returnen.
        }

    };
});