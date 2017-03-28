describe('Uppercase Filter', function() {

 beforeEach(module('bookApp'));

  var $filter;

beforeEach(inject(function(_$filter_){
  $filter = _$filter_('bookAppFilters');
}));

  it('zou Woord converteren naar hoofdletters', function() {
        var input = "testfilter"; //kleine letters
        var expected = "TESTFILTER"; //20 characters lang.

        expect($filter(input).toBe(expected));
  });

    it('zou nummers niet converteren naar hoofdletters', function() {
        var input = "12345"; //alleen nummers
        var expected = "12345"; //nog steeds.

        expect($filter(input).toBe(expected));
  });


  it('woord met 1 hoofdletters converteren', function() {
        var input = "Testfilter"; //1 hoofdletter
        var expected = "TESTFILTER"; //Hoofdletters

        expect($filter(input).toBe(expected));
  });


  it('Speciale tekens niet converteren.', function() {
        var input = "!@#$%^^";  
        var expected = "!@#$%^^"; //geen letters

        expect($filter(input).toBe(expected));
  });

    it('Woorden met bijna alle Hoofdletters', function() {
        var input = "SUZUki";  
        var expected = "SUZUKI"; //geen letters

        expect($filter(input).toBe(expected));
  });

      it('Woorden met letters en cijfers', function() {
        var input = "jansen110";  
        var expected = "JANSEN110"; //geen letters

        expect($filter(input).toBe(expected));
  });

        it('cijfers en tekens', function() {
        var input = "11029!@#";  
        var expected = "11029!@#"; //tekens + cijfers

        expect($filter(input).toBe(expected));
  });

        it('lege input', function() {
        var input = "";  
        var expected = "Onbekend"; //tekens + cijfers

        expect($filter(input).toBe(expected));
  });

});
