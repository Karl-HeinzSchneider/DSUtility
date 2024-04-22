import { matchCoords } from '../../src/regex/helper'

describe('matchCoords', () => {
    it('empty String', () => {
        const testString = "";
        const matches = matchCoords(testString);
        expect(matches).toBe(null);
    });

    it('random String', () => {
        const testString = "124ggaklasöjfaöjkasöj%&14512&/1||fasljf|f12231|";
        const matches = matchCoords(testString);
        expect(matches).toBe(null);
    });

    it('coord String', () => {
        const testString = "(123|321)";
        const matches = matchCoords(testString);
        expect(matches).not.toBe(null);
        if (!matches) return;
        expect(matches.length).toBe(1);
        expect(matches[0]).toBe("(123|321)");

    });

    it('small coord String left', () => {
        const testString = "23|321";
        const matches = matchCoords(testString);
        expect(matches).toBe(null);
    });

    it('small coord String right', () => {
        const testString = "123|32";
        const matches = matchCoords(testString);
        expect(matches).toBe(null);
    });

    it('coord + random String', () => {
        const testString = "124ggaklasöjfaöjkasöj%&14512&/1||fasljf|f12(123|321)f253|355";
        const matches = matchCoords(testString);
        expect(matches).not.toBe(null);
        if (!matches) return;
        expect(matches.length).toBe(1);
        expect(matches[0]).toBe("(123|321)")
    });

    it('multiple coord String', () => {
        const testString = "124ggaklasöjfaöjkasöj%&14512&/1||fasljf|f(123|123)asfasf1245!(451|321)sf14(/|";
        const matches = matchCoords(testString);
        expect(matches).not.toBe(null);
        if (!matches) return;
        expect(matches.length).toBe(2);
        expect(matches[0]).toBe("(123|123)")
        expect(matches[1]).toBe("(451|321)")
    });

});