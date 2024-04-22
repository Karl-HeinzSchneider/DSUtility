import { matchCoordsLast } from '../../src/regex/helper'

describe('blah', () => {
    it('empty String', () => {
        const testString = "";
        const last = matchCoordsLast(testString);
        expect(last).toBe(null);
    });

    it('random String', () => {
        const testString = "124ggaklasöjfaöjkasöj%&14512&/1||fasljf|f12231|";
        const last = matchCoordsLast(testString);
        expect(last).toBe(null);
    });

    it('coord String', () => {
        const testString = "(123|321)";
        const last = matchCoordsLast(testString);
        expect(last).not.toBe(null);
        if (!last) return;
        expect(last).toBe("(123|321)");

    });

    it('small coord String left', () => {
        const testString = "23|321";
        const last = matchCoordsLast(testString);
        expect(last).toBe(null);
    });

    it('small coord String right', () => {
        const testString = "123|32";
        const last = matchCoordsLast(testString);
        expect(last).toBe(null);
    });

    it('coord + random String', () => {
        const testString = "124ggaklasöjfaöjkasöj%&14512&/1||fasljf|f12(123|321)123|321rfasf%||";
        const last = matchCoordsLast(testString);
        expect(last).toBe("(123|321)")
    });

    it('multiple coord String', () => {
        const testString = "sss (123|321)(123|321)(123|666) ";
        const last = matchCoordsLast(testString);
        expect(last).toBe("(123|666)")
    });

});