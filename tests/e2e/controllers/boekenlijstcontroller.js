describe('E2E: Lijst van boeken op de pagina', function() {

  beforeEach(function() {
    browser.get('http://localhost:8080/#!/boeken');
    }); //zorgt dat je naar de juiste pagina gaat

        it('zou een h1 elemement moeten bevatten.', function() {

        var h1 = element(by.tagName('h1'));
        var h1Text = h1.getText();  //zoek de h1 tag en bekijk of de naam klopt
        expect(h1Text).toBe("Boekenlijst");
    });
    
      it('Zou een aantal boeken moeten laden.', function() {
        var rows = element.all(by.repeater('item in items')).count();
        expect(rows).toBe(4); //haal de ng-repeat items op en tel ze
         });
    
  });
