import { coords } from "../../regex/interfaces";
import { groupInformation } from "./interfaces";

export function parseGroupsString(data: string[], coords: coords): groupInformation | null {

    if (data.length < 6) {
        return null;
    }

    const grpNrString = data[1].replace(' ', '');
    const grpNr = Number(grpNrString);

    if (grpNr < 1) {
        return null;
    }
    else {
        const grpArray = data[4].split(';');
        const newArray = grpArray.map(grp => {
            return grp.trim();
        })

        return {
            village: coords,
            groups: newArray
        }
    }
}

export function generateGroupsArray(data: groupInformation[]): string[] {
    let grpSet: Set<string> = new Set();
    data.forEach(entry => {
        entry.groups.forEach(grp => {
            grpSet.add(grp)
        })
    })

    return Array.from(grpSet);
}