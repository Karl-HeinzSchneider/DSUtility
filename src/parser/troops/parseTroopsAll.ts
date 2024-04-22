import { coordsToObj, matchCoordsLast } from '../../regex/helper';
import { coordsFactory } from '../../regex/interfaces';
import { inspectObj } from '../inspectImport';
import { parseTroopsString } from './helper';
import { configTroops, troopInformation, troopsAllObj, troopType } from './interfaces';


export function parseTroopsAll(data: inspectObj, config: configTroops): troopsAllObj {

    let origin = coordsFactory(-1, -1);
    let troopsArray: troopInformation[] = [];
    const length = data.array.length - 1;
    for (let i = 1; i < length; ++i) {
        const lineArray = data.array[i].split('\t');
        if (lineArray.length < 10) {
            break;
        }

        const coords = matchCoordsLast(lineArray[0])
        // new Origin
        if (coords) {
            //console.log('NEW ORIGIN ' + coords)
            origin = coordsToObj(coords)!;
            const troops = parseTroopsString(lineArray.slice(1), origin, troopType.OWN, config);
            if (troops) {
                troopsArray.push(troops);
            }
        }
        // TroopInformation
        else {
            if (lineArray[0].startsWith('im Dorf')) {
                const troops = parseTroopsString(lineArray, origin, troopType.INSIDE, config);
                if (troops) {
                    troopsArray.push(troops);
                }
            }
            else if (lineArray[0].startsWith('auswärts')) {
                const troops = parseTroopsString(lineArray, origin, troopType.OUTSIDE, config);
                if (troops) {
                    troopsArray.push(troops);
                }
            }
            else if (lineArray[0].startsWith('unterwegs')) {
                const troops = parseTroopsString(lineArray, origin, troopType.UNDERWAY, config);
                if (troops) {
                    troopsArray.push(troops);
                }
            }
            else if (lineArray[0].startsWith('insgesamt')) {
                const troops = parseTroopsString(lineArray, origin, troopType.ALL, config);
                if (troops) {
                    troopsArray.push(troops);
                }
            }
            //console.log(`-TROOPS from (${origin.x}|${origin.y})`)
        }
    }

    return { data: troopsArray, time: data.time };
}