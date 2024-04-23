import { coords } from "../../regex/interfaces";
import { configTroops, suppInformation, troopInformation, troops, troopsFactoryEmpty, troopType } from "./interfaces";

export function parseTroopsString(data: string[], origin: coords, type: troopType, config: configTroops): troopInformation | null {
    let min = 1 + 9;
    if (config.archer) { min++ };
    if (config.pala) { min++ };

    if (data.length < min) {
        return null;
    }

    let troops = troopsFactoryEmpty();

    if (config.archer && config.pala) {
        troops.spear = Number(data[1]);
        troops.sword = Number(data[2]);
        troops.axe = Number(data[3]);
        troops.archer = Number(data[4]);
        troops.spy = Number(data[5]);
        troops.lkav = Number(data[6]);
        troops.akav = Number(data[7]);
        troops.skav = Number(data[8]);
        troops.ram = Number(data[9]);
        troops.kata = Number(data[10]);
        troops.pala = Number(data[11]);
        troops.snob = Number(data[12]);
        troops.militia = Number(data[13]) ? Number(data[13]) : 0;
    }

    else if (!config.archer && config.pala) {
        troops.spear = Number(data[1]);
        troops.sword = Number(data[2]);
        troops.axe = Number(data[3]);
        troops.archer = 0;
        troops.spy = Number(data[4]);
        troops.lkav = Number(data[5]);
        troops.akav = 0;
        troops.skav = Number(data[6]);
        troops.ram = Number(data[7]);
        troops.kata = Number(data[8]);
        troops.pala = Number(data[9]);
        troops.snob = Number(data[10]);
        troops.militia = Number(data[11]) ? Number(data[11]) : 0;
    }

    else if (config.archer && !config.pala) {
        troops.spear = Number(data[1]);
        troops.sword = Number(data[2]);
        troops.axe = Number(data[3]);
        troops.archer = Number(data[4]);
        troops.spy = Number(data[5]);
        troops.lkav = Number(data[6]);
        troops.akav = Number(data[7]);
        troops.skav = Number(data[8]);
        troops.ram = Number(data[9]);
        troops.kata = Number(data[10]);
        troops.pala = 0;
        troops.snob = Number(data[11]);
        troops.militia = Number(data[12]) ? Number(data[12]) : 0;
    }

    else if (!config.archer && !config.pala) {
        troops.spear = Number(data[1]);
        troops.sword = Number(data[2]);
        troops.axe = Number(data[3]);
        troops.archer = 0;
        troops.spy = Number(data[4]);
        troops.lkav = Number(data[5]);
        troops.akav = 0;
        troops.skav = Number(data[6]);
        troops.ram = Number(data[7]);
        troops.kata = Number(data[8]);
        troops.pala = 0;
        troops.snob = Number(data[9]);
        troops.militia = Number(data[10]) ? Number(data[10]) : 0;
    }

    return {
        origin: origin,
        type: type,
        troops: troops
    }
}

export function fillArray(data: string[], _config: configTroops): string[] {
    return data;
}

export function addTroops(a: troops, b: troops): troops {
    // copy?
    let tmp: troops = JSON.parse(JSON.stringify(a));
    tmp.spear = tmp.spear + b.spear;
    tmp.sword = tmp.sword + b.sword;
    tmp.axe = tmp.axe + b.axe;
    tmp.archer = tmp.archer + b.archer;
    tmp.spy = tmp.spy + b.spy;
    tmp.lkav = tmp.lkav + b.lkav;
    tmp.akav = tmp.akav + b.akav;
    tmp.skav = tmp.skav + b.skav;
    tmp.ram = tmp.ram + b.ram;

    tmp.kata = tmp.kata + b.kata;
    tmp.pala = tmp.pala + b.pala;
    tmp.snob = tmp.snob + b.snob;
    tmp.militia = tmp.militia + b.militia;

    return tmp;
}

export function parseSupportString(data: string[], origin: coords, target: coords, config: configTroops): suppInformation | null {
    if (data.length < 10) {
        return null;
    }
    const distance = Number(data[0]) ? Number(data[0]) : 0;
    const troops = parseTroopsString(data, origin, troopType.ALL, config);

    if (!troops) {
        return null;
    }

    return {
        origin: origin,
        target: target,
        distance: distance,
        troops: troops.troops,
    }
}

export function parseSupportStringExtended(data: string[], origin: coords, target: coords, config: configTroops, extended: string): suppInformation | null {
    if (data.length < 10) {
        return null;
    }
    const distance = Number(data[0]) ? Number(data[0]) : 0;
    const troops = parseTroopsString(data, origin, troopType.ALL, config);

    if (!troops) {
        return null;
    }

    const playerAlly = parsePlayerAlly(extended);

    return {
        origin: origin,
        target: target,
        distance: distance,
        troops: troops.troops,
        targetPlayer: playerAlly.player,
        targetAlly: playerAlly.ally
    }
}

export const matchPlayerAlly = /K\d{1,2}\s[(](.*)[)]$/g

export function parsePlayerAlly(data: string) {
    let player = '';
    let ally = '';

    const match = [...data.matchAll(matchPlayerAlly)]
    //console.log(data);
    //console.log('match', match);

    if (!match || match.length === 0) {
        return { player, ally }
    }

    const str = match[0][1];

    const split1 = str.split('[')

    player = split1[0].trimEnd();

    // => no '[' => no ally
    if (split1.length === 1) {
        return { player, ally }
    }

    const split2 = split1[1].split(']')
    ally = split2[0]

    return { player, ally }
}