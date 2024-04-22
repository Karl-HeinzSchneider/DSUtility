import { inspectImport } from '../../../src/parser/inspectImport';
import { troopType } from '../../../src/parser/troops/interfaces';
import { parseTroopsAll } from '../../../src/parser/troops/parseTroopsAll'
import { readTestFile } from '../../testFiles/testFiles';

describe('parseTroopsAll', () => {
    it('chrome', () => {
        const file = readTestFile('chrome.troopsAll');
        const troop = inspectImport(file);
        const parse = parseTroopsAll(troop, { archer: true, pala: false });
        const data = parse.data;

        //console.log(parse);
        expect(data.length).toBe(5);
        expect(data[0]).toStrictEqual({
            origin: { x: 423, y: 655 },
            type: troopType.OWN,
            troops: {
                spear: 38,
                sword: 20,
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
                militia: 0
            }
        })
        expect(data[1]).toStrictEqual({
            origin: { x: 423, y: 655 },
            type: troopType.INSIDE,
            troops: {
                spear: 38,
                sword: 20,
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
                militia: 0
            }
        })
        expect(data[2]).toStrictEqual({
            origin: { x: 423, y: 655 },
            type: troopType.OUTSIDE,
            troops: {
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
                militia: 0
            }
        })
        expect(data[3]).toStrictEqual({
            origin: { x: 423, y: 655 },
            type: troopType.UNDERWAY,
            troops: {
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
                militia: 0
            }
        })
        expect(data[4]).toStrictEqual({
            origin: { x: 423, y: 655 },
            type: troopType.ALL,
            troops: {
                spear: 38,
                sword: 20,
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
                militia: 0
            }
        })
    });

    it('firefox', () => {
        const file = readTestFile('firefox.troopsAll')
        const troop = inspectImport(file);
        const parse = parseTroopsAll(troop, { archer: true, pala: false });
        const data = parse.data;
        //console.log(parse);
        expect(data.length).toBe(5);
        expect(data[0]).toStrictEqual({
            origin: { x: 423, y: 655 },
            type: troopType.OWN,
            troops: {
                spear: 38,
                sword: 20,
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
                militia: 0
            }
        })
        expect(data[1]).toStrictEqual({
            origin: { x: 423, y: 655 },
            type: troopType.INSIDE,
            troops: {
                spear: 38,
                sword: 20,
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
                militia: 0
            }
        })
        expect(data[2]).toStrictEqual({
            origin: { x: 423, y: 655 },
            type: troopType.OUTSIDE,
            troops: {
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
                militia: 0
            }
        })
        expect(data[3]).toStrictEqual({
            origin: { x: 423, y: 655 },
            type: troopType.UNDERWAY,
            troops: {
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
                militia: 0
            }
        })
        expect(data[4]).toStrictEqual({
            origin: { x: 423, y: 655 },
            type: troopType.ALL,
            troops: {
                spear: 38,
                sword: 20,
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
                militia: 0
            }
        })
    });



});

describe('parseTroopsAll', () => {
    it('chrome', () => {
        const file = readTestFile('new.chrome.troopsAll');
        const troop = inspectImport(file);
        const parse = parseTroopsAll(troop, { archer: false, pala: false });
        const data = parse.data;       

        //console.log(parse);
        expect(data.length).toBe(100);

        expect(data[0]).toStrictEqual({
            origin: { x: 441, y: 422 },
            type: troopType.OWN,
            troops: {
                spear: 0,
                sword: 5,
                axe: 2119,
                archer: 0,
                spy: 50,
                pala: 0,
                lkav: 740,
                akav: 0,
                skav: 136,
                ram: 140,
                kata: 38,
                snob: 0,
                militia: 0
            }
        })
        expect(data[1]).toStrictEqual({
            origin: { x: 441, y: 422 },
            type: troopType.INSIDE,
            troops: {
                spear: 0,
                sword: 5,
                axe: 2119,
                archer: 0,
                spy: 50,
                pala: 0,
                lkav: 740,
                akav: 0,
                skav: 136,
                ram: 140,
                kata: 38,
                snob: 0,
                militia: 0
            }
        })
        expect(data[2]).toStrictEqual({
            origin: { x: 441, y: 422 },
            type: troopType.OUTSIDE,
            troops: {
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
                militia: 0
            }
        })
        expect(data[3]).toStrictEqual({
            origin: { x: 441, y: 422 },
            type: troopType.UNDERWAY,
            troops: {
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
                militia: 0
            }
        })
        expect(data[4]).toStrictEqual({
            origin: { x: 441, y: 422 },
            type: troopType.ALL,
            troops: {
                spear: 0,
                sword: 5,
                axe: 2119,
                archer: 0,
                spy: 50,
                pala: 0,
                lkav: 740,
                akav: 0,
                skav: 136,
                ram: 140,
                kata: 38,
                snob: 0,
                militia: 0
            }
        })
    });




});