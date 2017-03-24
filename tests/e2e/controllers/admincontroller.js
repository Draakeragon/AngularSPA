describe('E2E: Zoekbalk + Boekenlijst test', function() {

  beforeEach(function() {
    browser.get('http://localhost:8080/#!/admin');
    //ga naar de admin pagian toe
    });

    it('Bij zoeken moet er 1 boek getoond worden met de naam Sherlock', function() {
    
    element(by.model('searchTerm')).sendKeys("Sherlock");
    //stuur een naam in de zoekbalk
    
    var rows = element.all(by.repeater('item in items')).count();
    expect(rows).toBe(1);
    //nu moet er nog maar 1 element bestaan
  });

  it('should display a list of todo items', function() {
    var rows = element.all(by.repeater('item in items')).count();
    expect(rows).toBe(4);
  });

  });
