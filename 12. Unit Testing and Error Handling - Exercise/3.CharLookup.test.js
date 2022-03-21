const expect = require('chai').expect;
const lookupChar = require('./3.CharLookup');

describe('lookupChar tests', () => {
    it('Should return undeifned when first input is non-string', () => {
        expect(lookupChar(5, 5)).to.be.undefined;
        expect(lookupChar([], 5)).to.be.undefined;
    });
    it('Should return undeifned when second input is not a number', () => {
        expect(lookupChar('a', 'ads')).to.be.undefined;
        expect(lookupChar('a', [])).to.be.undefined;
    });
    it('Should return "Incorrect index" when second input is in wrong range or negative', () => {
        expect(lookupChar('a', 2)).to.equal('Incorrect index');
        expect(lookupChar('a', 1)).to.equal('Incorrect index');
        expect(lookupChar('a', -1)).to.equal('Incorrect index');
    });
    it('Should return the char at the index (index = 1, string = Hello, char at index = "e")', () => {
        expect(lookupChar('Hello', 1)).to.equal('e');
    });
});