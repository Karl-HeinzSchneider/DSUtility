import { divideNumberX } from '../../src/regex/constants';
import { matchesRegex } from '../../src/regex/helper'

describe('matchesRegex', () => {
    it('empty String', () => {
        const testString = "";
        const regex: RegExp = / /g;
        const bMatch = matchesRegex(testString,regex);
        expect(bMatch).toBe(false);
    });

    it('empty String', () => {
        const testString = "";
        const regex: RegExp = / /g;
        const bMatch = matchesRegex(testString,regex);
        expect(bMatch).toBe(false);
    });    

    it('test String', () => {
        const testString = "(*Castiel [opp]) ";
        const regex: RegExp = divideNumberX;
        const bMatch = matchesRegex(testString,regex);
        expect(bMatch).toBe(false);
    });
});