describe('Test the test', function() {
it('should work', function() {
expect(true).toBeTruthy();
    });
});

describe('failtest', function() {
it('shouldnot work', function() {
expect(false).not.toBe(true);
    });
});
