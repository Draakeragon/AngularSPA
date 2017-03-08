describe('Filter: puntjesfilter', function() {

    var filter;

    beforeEach(function() {
        module('testApp.filter');
        inject(function($filter){
            filter = $filter('puntjesFilter');
        });
    });

    it("Should add extra dots if length smaller than 20", function(){
        var input = "Hallo wereld!"; //13 characters lang
        var expected = "Hallo wereld!......."; //20 characters lang.

        expect(filer(input).toBe(expected));

        });

        it("should not add dots when the length is 20", function(){
        var input = "Goedemorgen Wereld!!"; //20 characters lang
        var expected = "Goedemorgen Wereld!!"; //20 characters lang

        expect(filter(input).toBe(expected));

        });

        it("should return 20 dots when the string is undefined", function()
        {
            var input = undefined; //20 characters lang
            var expected = "...................."; //20 characters lang

        expect(filter(input).toBe(expected));
        });
        
    
   });