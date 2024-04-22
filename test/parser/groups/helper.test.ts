import { parseGroupsString } from "../../../src/parser/groups/helper";

describe('parseGroupString', () => {
    it('', () => {
        const grpStringArray = [
            ' Hannah :3 (423|655) K64 ',
            '0',
            '373',
            '400 / 530',
            'nicht zugeordnet',
            '» bearbeiten\r'
        ]
        const parse = parseGroupsString(grpStringArray, { x: 423, y: 655 })
        expect(parse).toBe(null);
    });

    it('', () => {
        const grpStringArray = [
            ' Hannah :3 (423|655) K64 ',
            '2',
            '373',
            '400 / 530',
            'Def; Off',
            '» bearbeiten\r'
        ]
        const parse = parseGroupsString(grpStringArray, { x: 423, y: 655 })
        expect(parse).not.toBe(null);
        if (!parse) { return };
        expect(parse.village).toStrictEqual({ x: 423, y: 655 });
        expect(parse.groups).toStrictEqual(['Def', 'Off']);
    });

    it('', () => {
        const grpStringArray = [
            ' Hannah :3 (423|655) K64 ',
            '4',
            '373',
            '400 / 530',
            'Def; Off; ss; s sss ss',
            '» bearbeiten\r'
        ]
        const parse = parseGroupsString(grpStringArray, { x: 423, y: 655 })
        expect(parse).not.toBe(null);
        if (!parse) { return };
        expect(parse.village).toStrictEqual({ x: 423, y: 655 });
        expect(parse.groups).toStrictEqual(['Def', 'Off', 'ss', 's sss ss']);
    });

})