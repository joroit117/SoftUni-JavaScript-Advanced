const expect = require('chai').expect;
const rgbToHexColor = require('./6.RGBtoHex');

describe('rgbToHexTests', () => {
    describe('Input validation tests', () => {
        // Red Color(First Function Argument) Validation
        it('Should return undefined when red is invalid type or out of range', () => {
            expect(rgbToHexColor('A', 5, 5)).to.be.undefined;
            expect(rgbToHexColor([], 5, 5)).to.be.undefined;
            expect(rgbToHexColor(null, 5, 5)).to.be.undefined;
            expect(rgbToHexColor(true, 5, 5)).to.be.undefined;
            expect(rgbToHexColor(undefined, 5, 5)).to.be.undefined;
            expect(rgbToHexColor(256, 5, 5)).to.be.undefined;
            expect(rgbToHexColor(-1, 5, 5)).to.be.undefined;
        });
        // Green Color(Second Function Argument) Validation
        it('Should return undefined when green is invalid type or out of range', () => {
            expect(rgbToHexColor(5, 'A', 5)).to.be.undefined;
            expect(rgbToHexColor(5, [], 5)).to.be.undefined;
            expect(rgbToHexColor(5, null, 5)).to.be.undefined;
            expect(rgbToHexColor(5, true, 5)).to.be.undefined;
            expect(rgbToHexColor(5, undefined, 5)).to.be.undefined;
            expect(rgbToHexColor(5, 256, 5)).to.be.undefined;
            expect(rgbToHexColor(5, -1, 5)).to.be.undefined;
        });
        // Blue Color(Third Function Argument) Validation
        it('Should return undefined when blue is invalid type or out of range', () => {
            expect(rgbToHexColor(5, 5, 'A')).to.be.undefined;
            expect(rgbToHexColor(5, 5, [])).to.be.undefined;
            expect(rgbToHexColor(5, 5, null)).to.be.undefined;
            expect(rgbToHexColor(5, 5, true)).to.be.undefined;
            expect(rgbToHexColor(5, 5, undefined)).to.be.undefined;
            expect(rgbToHexColor(5, 5, 256)).to.be.undefined;
            expect(rgbToHexColor(5, 5, -1)).to.be.undefined;
        });
    });
    describe('Function expected to return color in hexadecimal format tests', () => {
        it('Should return red(#FF0000) when rgbToHexColor(255,0,0)', () => {
            expect(rgbToHexColor(255,0,0)).to.equal('#FF0000');
        });
        it('Should return green(#00FF00) when rgbToHexColor(0,255,0)', () => {
            expect(rgbToHexColor(0,255,0)).to.equal('#00FF00');
        });
        it('Should return blue(#0000FF) when rgbToHexColor(0,0,255)', () => {
            expect(rgbToHexColor(0,0,255)).to.equal('#0000FF');
        });
        it('Should return white(#FFFFFF) when rgbToHexColor(255,255,255)', () => {
            expect(rgbToHexColor(255,255,255)).to.equal('#FFFFFF');
        });
        it('Should return black(#000000) when rgbToHexColor(0,0,0)', () => {
            expect(rgbToHexColor(0,0,0)).to.equal('#000000');
        });
    });
});