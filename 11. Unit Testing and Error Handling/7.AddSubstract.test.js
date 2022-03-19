const expect = require('chai').expect;
const createCalculator = require('./7.AddSubstract');

describe('createCalculator tests', () => {
    describe('Return type validation', () => {
        it('Should return object', () => {
            let calculator = createCalculator();
            expect(typeof(calculator)).to.equal('object');
        });
    });
    describe('Returned object add/substract methods input validation', () => {
        it('Should return NaN when non-number is passed to add method', () => {
            let calculator = createCalculator();
            calculator.add('A');
            expect(calculator.get()).to.be.NaN;
        });
        it('Should return 5 when "5" is passed to add method', () => {
            let calculator = createCalculator();
            calculator.add('5');
            expect(calculator.get()).to.equal(5);
        });
        it('Should return NaN when non-number is passed to substract method', () => {
            let calculator = createCalculator();
            calculator.subtract('A');
            expect(calculator.get()).to.be.NaN;
        });
        it('Should return -5 when "5" is passed to substract method', () => {
            let calculator = createCalculator();
            calculator.subtract('5');
            expect(calculator.get()).to.equal(-5);
        });
        it('Should return 0 when nothing is passed to add and substract methods', () => {
            let calculator = createCalculator();
            expect(calculator.get()).to.equal(0);
        });
        it('Should return 0 when something is passed to add and substract methods', () => {
            let calculator = createCalculator();
            expect(calculator.get('a')).to.equal(0);
        });
    });
    describe('Returned object add/substract/get methods test', () => {
        it('Should return 5 / positive number addition', () => {
            let calculator = createCalculator();
            calculator.add(5);
            expect(calculator.get()).to.equal(5);
        });
        it('Should return -5 / negative number addition', () => {
            let calculator = createCalculator();
            calculator.add(-5);
            expect(calculator.get()).to.equal(-5);
        });
        it('Should return -10 / positive number substraction', () => {
            let calculator = createCalculator();
            calculator.subtract(10);
            expect(calculator.get()).to.equal(-10);
        });
        it('Should return 10 / negative number substraction', () => {
            let calculator = createCalculator();
            calculator.subtract(-10);
            expect(calculator.get()).to.equal(10);
        });
        it('Should return 5 / add more than substract', () => {
            let calculator = createCalculator();
            calculator.add(10);
            calculator.subtract(5);
            expect(calculator.get()).to.equal(5);
        });
        it('Should return -5 / substract more than add', () => {
            let calculator = createCalculator();
            calculator.add(5);
            calculator.subtract(10);
            expect(calculator.get()).to.equal(-5);
        });
        it('Should return 0 / zero add and substract', () => {
            let calculator = createCalculator();
            calculator.add(0);
            calculator.subtract(0);
            expect(calculator.get()).to.equal(0);
        });
    });

});