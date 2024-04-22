import { inspectImport } from '../../../src/parser/inspectImport';
import { troopsFactoryEmpty } from '../../../src/parser/troops/interfaces';
import { parseTroopsSupp } from '../../../src/parser/troops/parseTroopsSupp'
import { readTestFile } from '../../testFiles/testFiles';

describe('parseTroopsSupp', () => {
    const emptyTroops = troopsFactoryEmpty();

    it('chrome', () => {
        const file = readTestFile('chrome.supp')
        const supp = inspectImport(file);
        const parse = parseTroopsSupp(supp, { archer: true, pala: false });
        const data = parse.data;

        expect(data.length).toBe(3);
        expect(data[0]).toStrictEqual({
            origin: { x: 423, y: 655 },
            target: { x: 423, y: 655 },
            distance: 0,
            troops: { ...emptyTroops, spear: 37, sword: 53, spy: 10 }
        })
        expect(data[1]).toStrictEqual({
            origin: { x: 423, y: 655 },
            target: { x: 419, y: 656 },
            distance: 4,
            troops: { ...emptyTroops, spear: 1, sword: 2 }
        })
        expect(data[2]).toStrictEqual({
            origin: { x: 423, y: 655 },
            target: { x: 421, y: 652 },
            distance: 4,
            troops: { ...emptyTroops, spear: 2, sword: 5 }
        })

        // console.log(parse.time);


    });

    it('firefox', () => {
        const fileFirefox = readTestFile('firefox.supp')
        const suppFirefox = inspectImport(fileFirefox);
        const parseFirefox = parseTroopsSupp(suppFirefox, { archer: true, pala: false });

        const fileChrome = readTestFile('chrome.supp')
        const suppChrome = inspectImport(fileChrome);
        const parseChrome = parseTroopsSupp(suppChrome, { archer: true, pala: false });

        expect(parseFirefox.data).toStrictEqual(parseChrome.data);
    });




});

describe('parseTroopsSupp NEW', () => {
    const emptyTroops = troopsFactoryEmpty();

    it('chrome', () => {
        const file = readTestFile('new.chrome.supp')
        const supp = inspectImport(file);
        const parse = parseTroopsSupp(supp, { archer: false, pala: false });
        const data = parse.data;

        expect(data.length).toBe(44);
        expect(data[0]).toStrictEqual({
            origin: { x: 449, y: 418 },
            target: { x: 449, y: 418 },
            distance: 0,
            troops: { ...emptyTroops, spear: 870, sword: 681, spy: 233 }
        })
        expect(data[1]).toStrictEqual({
            origin: { x: 449, y: 418 },
            target: { x: 451, y: 394 },
            distance: 24,
            troops: { ...emptyTroops, spear: 648, sword: 403, spy: 4 }
        })
        expect(data[2]).toStrictEqual({
            origin: { x: 449, y: 418 },
            target: { x: 490, y: 471 },
            distance: 67,
            troops: { ...emptyTroops, spear: 250, sword: 250, spy: 25 }
        })

        expect(data[3]).toStrictEqual({
            origin: { x: 445, y: 418 },
            target: { x: 445, y: 418 },
            distance: 0,
            troops: { ...emptyTroops, spear: 2281, sword: 1010, axe: 334, spy: 290, lkav: 5, skav: 31, kata: 25 }
        })
        // console.log(parse.time);


    });




});