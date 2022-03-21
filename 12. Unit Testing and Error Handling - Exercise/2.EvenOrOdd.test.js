const expect = require('chai').expect;
const isOddOrEven = require('./2.EvenOrOdd');

describe('isOddOrEven tests', () => {
    it('Should return undefined when the input is non-string', () => {
        expect(isOddOrEven(5)).to.be.undefined;
        expect(isOddOrEven([])).to.be.undefined;
    });
    it('Should return even when the input is string with even length number', () => {
        expect(isOddOrEven('Gorgeous')).to.equal('even');
    });
    it('Should return odd when the input is string with odd length number', () => {
        expect(isOddOrEven('Hello')).to.equal('odd');
    });
    it('Extra mixed tests even and odd', () => {
        expect(isOddOrEven('Hi my name is George!')).to.equal('odd');
        expect(isOddOrEven('Audi car')).to.equal('even');
        expect(isOddOrEven('Hamburgers')).to.equal('even');
        expect(isOddOrEven('ocean')).to.equal('odd');
    });
});