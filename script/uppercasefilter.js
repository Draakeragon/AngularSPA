var bookAppFilters = angular.module('bookApp.filters', []);

bookAppFilters.filter('makeUppercase', function () {
    return function (item) {

        if(item !== undefined && item.length > 0)
        {
        return item.toUpperCase();
        }
        
        else 
        {
            return "Onbekend";
        }

    };
});