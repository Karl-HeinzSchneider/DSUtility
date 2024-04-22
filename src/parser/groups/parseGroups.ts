import { coordsToObj, matchCoordsLast } from "../../regex/helper";
import { inspectObj } from "../inspectImport";
import { generateGroupsArray, parseGroupsString } from "./helper";
import { groupInformation, groupsObj } from "./interfaces";


export function parseGroups(data: inspectObj): groupsObj {

    let groupsArray: groupInformation[] = [];

    const length = data.array.length - 1;
    for (let i = 1; i < length; ++i) {
        const lineArray = data.array[i].split('\t');
        if (lineArray.length < 6) {
            break;
        }

        const coordsString = matchCoordsLast(lineArray[0]);
        if (coordsString) {
            //console.log(lineArray)
            const coords = coordsToObj(coordsString)!;
            const groups = parseGroupsString(lineArray, coords);
            if (groups) {
                groupsArray.push(groups);
            }
        }
    }

    const grpSet = generateGroupsArray(groupsArray);

    return { data: groupsArray, groups: grpSet, time: data.time };
}