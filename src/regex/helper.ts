import { coordBracketX } from "./constants";
import { coordsFactory } from "./interfaces";

export function matchCoords(data: string) {
    return data.match(coordBracketX);
}

export function matchCoordsLast(data: string) {
    const matches = matchCoords(data);
    //console.log(matches)
    if (!matches) return null;
    if (matches.length === 0) return null;

    return matches[matches.length - 1];
}

export function coordsToObj(data: string) {
    const match = matchCoordsLast(data);
    if (!match) return null;
    if (match != data) return null;

    const split = match.split('|');
    if (split.length != 2) return null;
    const x = split[0].replace('(', '');
    const y = split[1].replace(')', '');

    return coordsFactory(Number(x), Number(y));
}

export function matchesRegex(data: string, r: RegExp) {
    const match = data.match(r);
    if (!match) return false;
    if (match.length === 0) return false;
    if (match.length > 1) return false;
    if (match[0] === data) return true;
    else return false;
}

export function getDate(data: string) {

    // Serverzeit: 16:48:58 29/12/2020
    const array = data.split(' ');
    const timeArray = array[1].split(':').map(time => Number(time));
    const dateArray = array[2].split('/').map(date => Number(date));
    const date = new Date(dateArray[2], dateArray[1] - 1, dateArray[0], timeArray[0], timeArray[1], timeArray[0], 0);

    return date;
}