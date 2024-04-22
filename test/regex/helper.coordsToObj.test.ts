import { coordsToObj } from '../../src/regex/helper'

describe('coordsToObj', () => {
    it('empty String', () => {
        const testString = "";
        const last = coordsToObj(testString);
        expect(last).toBe(null);
    });

    it('random String', () => {
        const testString = "124ggaklasöjfaöjkasöj%&14512&/1||fasljf|f12231|";
        const last = coordsToObj(testString);
        expect(last).toBe(null);
    });

    it('coord String', () => {
        const testString = "(123|321)";
        const last = coordsToObj(testString);
        expect(last).not.toBe(null);
        if (!last) return;
        expect(last).toStrictEqual({ x: 123, y: 321 });

    });

    it('small coord String left', () => {
        const testString = "23|321";
        const last = coordsToObj(testString);
        expect(last).toBe(null);
    });

    it('small coord String right', () => {
        const testString = "123|32";
        const last = coordsToObj(testString);
        expect(last).toBe(null);
    });

    it('coord + random String', () => {
        const testString = "124ggaklasöjfaöjkasöj%&14512&/1||fasljf|f12(123|321)123|321rfasf%||";
        const last = coordsToObj(testString);
        expect(last).toBe(null)
    });

    it('multiple coord String', () => {
        const testString = "sss (123|321)(123|321)(123|666) ";
        const last = coordsToObj(testString);
        expect(last).toBe(null)
    });

});