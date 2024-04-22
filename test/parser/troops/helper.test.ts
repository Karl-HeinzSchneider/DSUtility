import { addTroops, parseSupportString, parseTroopsString } from '../../../src/parser/troops/helper'
import { troopsFactory, troopsFactoryEmpty, troopType } from '../../../src/parser/troops/interfaces';


const troopString = ['xxx', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', 'Truppen']

describe('parseTroops', () => {
    it('archer pala', () => {
        const parse = parseTroopsString(troopString, { x: 123, y: 321 }, troopType.OWN, { archer: true, pala: true });
        expect(parse).not.toBe(null);
        if (!parse) { return };
        expect(parse.origin).toStrictEqual({ x: 123, y: 321 });
        expect(parse.type).toBe(troopType.OWN);
        expect(parse.troops).toStrictEqual({
            spear: 1,
            sword: 2,
            axe: 3,
            archer: 4,
            spy: 5,
            lkav: 6,
            akav: 7,
            skav: 8,
            ram: 9,
            kata: 10,
            pala: 11,
            snob: 12,
            militia: 13
        })
    });

    it('!archer pala', () => {
        const parse = parseTroopsString(troopString, { x: 123, y: 321 }, troopType.OWN, { archer: false, pala: true });
        expect(parse).not.toBe(null);
        if (!parse) { return };
        expect(parse.origin).toStrictEqual({ x: 123, y: 321 });
        expect(parse.type).toBe(troopType.OWN);
        expect(parse.troops).toStrictEqual({
            spear: 1,
            sword: 2,
            axe: 3,
            archer: 0,
            spy: 4,
            lkav: 5,
            akav: 0,
            skav: 6,
            ram: 7,
            kata: 8,
            pala: 9,
            snob: 10,
            militia: 11
        })
    });

    it('archer !pala', () => {
        const parse = parseTroopsString(troopString, { x: 123, y: 321 }, troopType.OWN, { archer: true, pala: false });
        expect(parse).not.toBe(null);
        if (!parse) { return };
        expect(parse.origin).toStrictEqual({ x: 123, y: 321 });
        expect(parse.type).toBe(troopType.OWN);
        expect(parse.troops).toStrictEqual({
            spear: 1,
            sword: 2,
            axe: 3,
            archer: 4,
            spy: 5,
            lkav: 6,
            akav: 7,
            skav: 8,
            ram: 9,
            kata: 10,
            pala: 0,
            snob: 11,
            militia: 12
        })
    });

    it('!archer !pala', () => {
        const parse = parseTroopsString(troopString, { x: 123, y: 321 }, troopType.OWN, { archer: false, pala: false });
        expect(parse).not.toBe(null);
        if (!parse) { return };
        expect(parse.origin).toStrictEqual({ x: 123, y: 321 });
        expect(parse.type).toBe(troopType.OWN);
        expect(parse.troops).toStrictEqual({
            spear: 1,
            sword: 2,
            axe: 3,
            archer: 0,
            spy: 4,
            lkav: 5,
            akav: 0,
            skav: 6,
            ram: 7,
            kata: 8,
            pala: 0,
            snob: 9,
            militia: 10
        })
    });



});

describe('addTroops', () => {
    it('empty + empty', () => {
        const t1 = troopsFactoryEmpty();
        const t2 = troopsFactoryEmpty();
        const sum = addTroops(t1, t2);

        expect(sum).toStrictEqual({
            spear: 0,
            sword: 0,
            axe: 0,
            archer: 0,
            spy: 0,
            pala: 0,
            lkav: 0,
            akav: 0,
            skav: 0,
            ram: 0,
            kata: 0,
            snob: 0,
            militia: 0,
        });
    });

    it('empty + troops', () => {
        const t1 = troopsFactoryEmpty();
        const t2 = troopsFactory(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13);
        const sum = addTroops(t1, t2);

        expect(sum).toStrictEqual({
            spear: 1,
            sword: 2,
            axe: 3,
            archer: 4,
            spy: 5,
            pala: 6,
            lkav: 7,
            akav: 8,
            skav: 9,
            ram: 10,
            kata: 11,
            snob: 12,
            militia: 13,
        });
    });

    it('troops + empty', () => {
        const t1 = troopsFactory(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13);
        const t2 = troopsFactoryEmpty();
        const sum = addTroops(t1, t2);

        expect(sum).toStrictEqual({
            spear: 1,
            sword: 2,
            axe: 3,
            archer: 4,
            spy: 5,
            pala: 6,
            lkav: 7,
            akav: 8,
            skav: 9,
            ram: 10,
            kata: 11,
            snob: 12,
            militia: 13,
        });
    });

    it('troops + troops', () => {
        const t1 = troopsFactory(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13);
        const t2 = troopsFactory(11, 22, 33, 44, 55, 66, 77, 88, 99, 1010, 1111, 1212, 1313);
        const sum = addTroops(t1, t2);

        expect(sum).toStrictEqual({
            spear: 12,
            sword: 24,
            axe: 36,
            archer: 48,
            spy: 60,
            pala: 72,
            lkav: 84,
            akav: 96,
            skav: 108,
            ram: 1020,
            kata: 1122,
            snob: 1224,
            militia: 1326,
        });
    });

});

describe('parseSupp', () => {
    let supportString = troopString;
    supportString[0] = "666";

    it('', () => {
        const parse = parseSupportString(supportString, { x: 123, y: 321 }, { x: 321, y: 123 }, { archer: true, pala: true });
        expect(parse).not.toBe(null);
        if (!parse) { return };
        expect(parse.origin).toStrictEqual({ x: 123, y: 321 });
        expect(parse.target).toStrictEqual({ x: 321, y: 123 });
        expect(parse.distance).toStrictEqual(666);
        expect(parse.troops).toStrictEqual({
            spear: 1,
            sword: 2,
            axe: 3,
            archer: 4,
            spy: 5,
            lkav: 6,
            akav: 7,
            skav: 8,
            ram: 9,
            kata: 10,
            pala: 11,
            snob: 12,
            militia: 13
        })
    });
})