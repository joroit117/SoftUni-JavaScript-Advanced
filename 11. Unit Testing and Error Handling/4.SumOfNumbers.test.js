const expect = require('chai').expect;
const sum = require('./4.SumOfNumbers');

describe('Sum of Numbers', () => {
    it('Should return the sum of the numbers in the array', () => {
        let numbers = [1, 2, 3, 4, 5];
        let actualSum = sum(numbers);
        let expectedSum = 15;
        expect(actualSum).to.equal(expectedSum);
    });

    it('Should return the sum with negative number in the array', () => {
        let numbers = [1, 2, 3, 4, -5];
        let actualSum = sum(numbers);
        let expectedSum = 5;
        expect(actualSum).to.equal(expectedSum);
    });

    it('Should return zero when only zeroes in the array', () => {
        let numbers = [0, 0, 0, 0];
        let actualSum = sum(numbers);
        let expectedSum = 0;
        expect(actualSum).to.equal(expectedSum);
    });

    it('Should return negative when only negatives in the array', () => {
        let numbers = [-9, -5, -7];
        let actualSum = sum(numbers);
        let expectedSum = -21;
        expect(actualSum).to.equal(expectedSum);
    });
});