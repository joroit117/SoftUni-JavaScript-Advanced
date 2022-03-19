const expect = require('chai').expect;
const isSymmetric = require('./5.CheckForSymmetry');

describe('Symmetrci arrays - tests', () => {
    describe('Symmetric arrays - regular cases', () => {
        it('Should return true on isSymmetric([1,2,1])', () => {
            expect(isSymmetric([1,2,1])).to.be.true;
        });
    
        it('Should return false on isSymmetric([1,2,-1])', () => {
            expect(isSymmetric([1,2,-1])).to.be.false;
        });
    
        it('Should return true on isSymmetric([10,20,20,10])', () => {
            expect(isSymmetric([10,20,20,10])).to.be.true;
        });
    
        it('Should return false on isSymmetric([10,20,30,10])', () => {
            expect(isSymmetric([10,20,30,10])).to.be.false;
        });
    
        it('Should return true on isSymmetric(["pesho", new Date(2016,8,15),false,new Date(2016,8,15), "pesho"])', () => {
            expect(isSymmetric(["pesho", new Date(2016,8,15),false,new Date(2016,8,15), "pesho"])).to.be.true;
        });
    
        it('Should return false on isSymmetric(["pesho", new Date(2016,8,15),false,"pesho"])', () => {
            expect(isSymmetric(["pesho", new Date(2016,8,15),false, "pesho"])).to.be.false;
        });
    });
    
    describe('Symmetric arrays - edge cases', () => {
        
        it('Should return false when non-array is passed to the function', () => {
            expect(isSymmetric(0)).to.equal(false);
            expect(isSymmetric('A')).to.equal(false);
            expect(isSymmetric(undefined)).to.equal(false);
            expect(isSymmetric(null)).to.equal(false);
            expect(isSymmetric(true)).to.equal(false);
        });

        it('Should return false when array is non-symmetric', () => {
            expect(isSymmetric([1, 2, 3, 4, 5])).to.equal(false);
            expect(isSymmetric(['A', 'B', 'C', 'D'])).to.equal(false);
        });

        it('Should return true when array is symmetric', () => {
            expect(isSymmetric([1, 2, 3, 2, 1])).to.equal(true);
            expect(isSymmetric(['A', 'B', 'B', 'A'])).to.equal(true);
            expect(isSymmetric([])).to.equal(true);
        });

        it('Should return false on isSymmetric(["2",2])', () => {
            expect(isSymmetric(["2",2])).to.be.false;
        });
    
        it('Should return true on isSymmetric([2])', () => {
            expect(isSymmetric([2])).to.be.true;
        });
    
        it('Should return true on isSymmetric([])', () => {
            expect(isSymmetric([])).to.be.true;
        });
    
        it('Should return true on isSymmetric([[1,2], [2], [1,2]])', () => {
            expect(isSymmetric([[1,2], [2], [1,2]])).to.be.true;
        });
    }); 
});

