/*

Credit to : https://leetcode.com/problems/integer-to-roman/

Simple explication : https://sciencing.com/how-5135082-convert-kilojoules-kilocalories.html

*/

import { romanToInt } from '../../src/roman-to-integer';

describe.skip('return a number based on a roman number', () => {
    it('should return 1 if the roman number is I', () => {
        expect(romanToInt('I')).toBe(1);
    });

    it('should return 5 if the roman number is V', () => {
        expect(romanToInt('V')).toBe(5);
    });

    it('should return 10 if the roman number is X', () => {
        expect(romanToInt('X')).toBe(10);
    });

    it('should return 50 if the roman number is 50', () => {
        expect(romanToInt('L')).toBe(50);
    });

    it('should return 4 if the roman number is IV', () => {
        expect(romanToInt('IV')).toBe(4);
    });

    it('should return 9 if the roman number is IX', () => {
        expect(romanToInt('IX')).toBe(9);
    });

    it('should return 11 if the roman number is XI', () => {
        expect(romanToInt('XI')).toBe(11);
    });

    it('should return 3 if the roman number is III', () => {
        expect(romanToInt('III')).toBe(3);
    });

    it('should return 58 if the roman number is ', () => {
        expect(romanToInt('LVIII')).toBe(58);
    });

    it('should return 27  if the rome number is XXVII', () => {
        expect(romanToInt('XXVII')).toBe(27);
    });
    it('should return 1994  if the rome number is MCMXCIV', () => {
        expect(romanToInt('MCMXCIV')).toBe(1994);
    });
});
