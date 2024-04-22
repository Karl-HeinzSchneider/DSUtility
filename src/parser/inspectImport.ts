import { startTroopsX, endTroopsX, startSuppX, endSuppX, startGroupsX, endGroupsX } from "../regex/constants";

const endline = '\n';

export enum importType { NULL, GROUPS, TROOPSALL, SUPPORT };

export interface importRegex {
    type: importType,
    start: RegExp,
    end: RegExp
}

export interface inspectConfig {
    regex?: importRegex[],
}

const defaultConfig: inspectConfig = {
    regex: [
        {
            type: importType.TROOPSALL,
            start: startTroopsX,
            end: endTroopsX
        },
        {
            type: importType.SUPPORT,
            start: startSuppX,
            end: endSuppX
        },
        {
            type: importType.GROUPS,
            start: startGroupsX,
            end: endGroupsX
        }
    ]
}

export interface inspectObj {
    bValid: boolean,
    header: string,
    time: string,
    type: importType,
    typeEnd: importType,
    startIndex: number,
    endIndex: number,
    array: string[]
}

export function inspectImport(data: string, config: inspectConfig = defaultConfig): inspectObj {
    const lines = data.split(endline);

    let startIndex = -1;
    let bStartFound = false;
    let type: importType = importType.NULL;
    let header: string = "";
    let startReg: importRegex;

    let endIndex = -1;
    let bEndFound = false;
    let typeEnd: importType = importType.NULL;
    let time: string = "";

    let bvalid = false;
    let array: string[] = [];

    lines.forEach((line, index) => {
        // find start
        if (!bStartFound) {
            config.regex?.forEach(reg => {
                if (reg.start.test(line)) {
                    startIndex = index;
                    bStartFound = true;
                    type = reg.type;
                    header = line;

                    startReg = reg;
                }
            })
        }
        else if (startReg && bStartFound && !bEndFound) {
            if (startReg.end.test(line)) {
                endIndex = index;
                bEndFound = true;
                typeEnd = startReg.type;
                time = line;
            }

        }
    })

    if (bStartFound && bEndFound) {
        bvalid = true;
        array = lines.slice(startIndex, endIndex + 1);

        const maybeEmpty = array[array.length - 2];
        if(maybeEmpty === '\r' || maybeEmpty === ''){
            //console.log('FIREFOX')
            array[array.length - 2] = array[array.length - 1];
            array.length = array.length - 1;
            endIndex = endIndex - 1;
        }
/* 
        // Firefox -> empty line
        if (array[array.length - 2].length < 3) {
            //console.log('FIREFOX')
            array[array.length - 2] = array[array.length - 1];
            array.length = array.length - 1;
            endIndex = endIndex - 1;
        } */
    }
    else {
        bvalid = false;
    }

    return {
        bValid: bvalid,
        header: header,
        time: time,
        type: type,
        typeEnd: typeEnd,
        startIndex: startIndex,
        endIndex: endIndex,
        array: array
    }
}