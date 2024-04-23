import { inspectImport } from '../../../src/parser/inspectImport';
import { troopsFactoryEmpty } from '../../../src/parser/troops/interfaces';
import { parseTroopsSupp } from '../../../src/parser/troops/parseTroopsSupp'
import { readTestFile } from '../../testFiles/testFiles';

describe('parseTroopsSuppExtended', () => {
    const emptyTroops = troopsFactoryEmpty();

    it('chrome', () => {
        const file = readTestFile('chrome.supp')
        const supp = inspectImport(file);
        const parse = parseTroopsSupp(supp, { archer: true, pala: false }, true);
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
            troops: { ...emptyTroops, spear: 1, sword: 2 },
            targetAlly: 'opp',
            targetPlayer: '*Castiel'
        })
        expect(data[2]).toStrictEqual({
            origin: { x: 423, y: 655 },
            target: { x: 421, y: 652 },
            distance: 4,
            troops: { ...emptyTroops, spear: 2, sword: 5 },
            targetAlly: 'opp',
            targetPlayer: 'SRollins316'
        })

        // console.log(parse.time);


    });

    it('firefox', () => {
        const fileFirefox = readTestFile('firefox.supp')
        const suppFirefox = inspectImport(fileFirefox);
        const parseFirefox = parseTroopsSupp(suppFirefox, { archer: true, pala: false }, true);

        const fileChrome = readTestFile('chrome.supp')
        const suppChrome = inspectImport(fileChrome);
        const parseChrome = parseTroopsSupp(suppChrome, { archer: true, pala: false }, true);

        expect(parseFirefox.data).toStrictEqual(parseChrome.data);
    });
});
