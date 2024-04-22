import { coords } from "../../regex/interfaces";

//export type troopType = 'own' | 'inside' | 'outside' | 'underway' | 'all';
export enum troopType { OWN, INSIDE, OUTSIDE, UNDERWAY, ALL }

export interface troopInformation {
    origin: coords,
    type: troopType,
    troops: troops
}

export interface troopsAllObj {
    data: troopInformation[];
    time: string;
}

export interface suppInformation {
    origin: coords,
    target: coords,
    distance: number,
    troops: troops
}

export interface troopsSuppObj {
    data: suppInformation[];
    time: string;
}

export interface troops {
    spear: number,
    sword: number,
    axe: number,
    archer: number,
    spy: number,
    pala: number,
    lkav: number,
    akav: number,
    skav: number,
    ram: number,
    kata: number,
    snob: number,
    militia: number,
}

export function troopsFactoryEmpty(): troops {
    return {
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
    } as troops
}

export function troopsFactory(spear: number,
    sword: number,
    axe: number,
    archer: number,
    spy: number,
    pala: number,
    lkav: number,
    akav: number,
    skav: number,
    ram: number,
    kata: number,
    snob: number,
    militia: number): troops {
    return {
        spear: spear,
        sword: sword,
        axe: axe,
        archer: archer,
        spy: spy,
        pala: pala,
        lkav: lkav,
        akav: akav,
        skav: skav,
        ram: ram,
        kata: kata,
        snob: snob,
        militia: militia,
    } as troops
}

export interface configTroops {
    pala: boolean,
    archer: boolean,
    militia?: boolean
}