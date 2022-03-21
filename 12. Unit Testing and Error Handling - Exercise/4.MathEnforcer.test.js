const expect = require('chai').expect;
const { subtractTen } = require('./4.MathEnforcer');
const mathEnforcer = require('./4.MathEnforcer');

describe('mathEnforcer object methods test', () => {
    describe('Method addFive', () => {
        it('Should return undefined if the parameter is not a number', () => {
            expect(mathEnforcer.addFive('a')).to.be.undefined;
            expect(mathEnforcer.addFive([])).to.be.undefined;
        });
        it('Should return parameter + 5 if the parameter is a number', () => {
            expect(mathEnforcer.addFive(10)).to.equal(15);
        });
        it('Should return parameter + 5 if the parameter is a negative number', () => {
            expect(mathEnforcer.addFive(-10)).to.equal(-5);
        });
        it('Should return parameter + 5 if the parameter is a float number', () => {
            expect(parseFloat((mathEnforcer.addFive(10.04) * 1.0).toFixed(2))).to.equal(15.04);
        });
    });
    describe('Method subtractTen', () => {
        it('Should return undefined if the parameter is not a number', () => {
            expect(mathEnforcer.subtractTen('a')).to.be.undefined;
            expect(mathEnforcer.subtractTen([])).to.be.undefined;
        });
        it('Should return parameter - 10 if the parameter is a number', () => {
            expect(mathEnforcer.subtractTen(10)).to.equal(0);
        });
        it('Should return parameter - 10 if the parameter is a negative number', () => {
            expect(mathEnforcer.subtractTen(-10)).to.equal(-20);
        });
        it('Should return parameter - 10 if the parameter is a float number', () => {
            expect(parseFloat((mathEnforcer.subtractTen(10.45) * 1.0).toFixed(2))).to.equal(0.45);
        });
    });
    describe('Method sum', () => {
        it('Should return undefined if any of the parameters is not a number', () => {
            expect(mathEnforcer.sum('a', 5)).to.be.undefined;
            expect(mathEnforcer.sum(5, [])).to.be.undefined;
            expect(mathEnforcer.sum({}, null)).to.be.undefined;
        });
        it('Should return sum of the two parameters if the parameters are numbers', () => {
            expect(mathEnforcer.sum(10, 5)).to.equal(15);
        });
        it('Should return sum of the two parameters if the parameters are negative numbers', () => {
            expect(mathEnforcer.sum(-10, -5)).to.equal(-15);
        });
        it('Should return sum of the two parameters if the parameters are float numbers', () => {
            expect(parseFloat((mathEnforcer.sum(1.5, 2.35) * 1.0).toFixed(2))).to.equal(3.85);
        });
    });
});