import { coordsToObj, matchCoordsLast, matchesRegex } from '../../regex/helper';
import { coordsFactory } from '../../regex/interfaces';
import { divideOriginX, divideNumberX } from '../../regex/constants'
import { configTroops, suppInformation, troopsSuppObj } from './interfaces';
import { parseSupportString } from './helper';
import { inspectObj } from '../inspectImport';


export function parseTroopsSupp(data: inspectObj, config: configTroops): troopsSuppObj {

    let origin = coordsFactory(-1, -1);
    let troopsArray: suppInformation[] = [];

    const length = data.array.length - 1;
    for (let i = 1; i < length; ++i) {
        const lineArray = data.array[i].split('\t');
        if (lineArray.length < 10) {
            break;
        }

        const coordsString = matchCoordsLast(lineArray[0])

        // has Information
        if (coordsString) {
            const coords = coordsToObj(coordsString)!;;
            // new Origin           
            if (matchesRegex(lineArray[1], divideOriginX)) {
                origin = coords;
                const troops = parseSupportString(lineArray.slice(1), origin, coords, config);
                if (troops) {
                    //console.log('new Origin' + '\n' + JSON.stringify(troops));
                    troopsArray.push(troops);
                }
                else {
                    //console.log('new Origin - ERROR?');
                }
            }
            // troops outside from origin at coords #CHROME
            else if (matchesRegex(lineArray[1], divideNumberX)) {
                const troops = parseSupportString(lineArray.slice(1), origin, coords, config);
                if (troops) {
                    //console.log('troops at' + '\n' + JSON.stringify(troops));
                    troopsArray.push(troops);
                }
                else {
                    //console.log('troops at - ERROR?');
                }
            }
            // troops outside from origin at coords #FIREFOX -> Skip
            else if (matchesRegex(lineArray[2], divideNumberX)) {
                //console.log('firefox')               
                const troops = parseSupportString(lineArray.slice(2), origin, coords, config);
                if (troops) {
                    //console.log('troops at (firefox)' + '\n' + JSON.stringify(troops));
                    troopsArray.push(troops);
                }
                else {
                    //console.log('troops at (firefox) - ERROR?');
                }
            }
            else {
                console.log(lineArray)
            }
        }
        // endLine
        else {

        }
    }

    return { data: troopsArray, time: data.time };
}