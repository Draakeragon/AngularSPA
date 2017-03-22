describe('E2E: AboutController', function() {

    beforeEach(function() {
        browser.get('http://localhost:8080/#!/');
    });
    
    it('should display a proper h1 message', function() {

        var h1 = element(by.tagName('h1'));
        var h1Text = h1.getText();
        expect(h1Text).toBe("About page");
    });

});