import { importType, inspectImport } from '../../src/parser/inspectImport'

import { readTestFile } from '../testFiles/testFiles';

describe('inspectImport troopsAll', () => {
    it('chrome.troopsAll', () => {
        const file = readTestFile('chrome.troopsAll')
        const parse = inspectImport(file);
        //console.log(parse)
        expect(parse.bValid).toBe(true);
        expect(parse.startIndex).toBe(38);
        expect(parse.endIndex).toBe(44);
        expect(parse.type).toBe(importType.TROOPSALL)
        expect(parse.typeEnd).toBe(importType.TROOPSALL)

        expect(parse.header).not.toBe("");
        expect(parse.time).not.toBe("");

        expect(parse.array.length).toBe(7);
    });

    it('firefox.troopsAll', () => {
        const file = readTestFile('firefox.troopsAll')
        const parse = inspectImport(file);
        //console.log(parse)
        expect(parse.bValid).toBe(true);
        expect(parse.startIndex).toBe(76);
        expect(parse.endIndex).toBe(82);
        expect(parse.type).toBe(importType.TROOPSALL)
        expect(parse.typeEnd).toBe(importType.TROOPSALL)

        expect(parse.header).not.toBe("");
        expect(parse.time).not.toBe("");

        expect(parse.array.length).toBe(7);
    });
});

describe('inspectImport supp', () => {
    it('chrome.supp', () => {
        const file = readTestFile('chrome.supp')
        const parse = inspectImport(file);
        //console.log(parse)
        expect(parse.bValid).toBe(true);
        expect(parse.startIndex).toBe(38);
        expect(parse.endIndex).toBe(43);
        expect(parse.type).toBe(importType.SUPPORT)
        expect(parse.typeEnd).toBe(importType.SUPPORT)

        expect(parse.header).not.toBe("");
        expect(parse.time).not.toBe("");

        expect(parse.array.length).toBe(6);
    });

    it('firefox.supp', () => {
        const file = readTestFile('firefox.supp')
        const parse = inspectImport(file);
        //console.log(parse)
        expect(parse.bValid).toBe(true);
        expect(parse.startIndex).toBe(76);
        expect(parse.endIndex).toBe(81);
        expect(parse.type).toBe(importType.SUPPORT)
        expect(parse.typeEnd).toBe(importType.SUPPORT)

        expect(parse.header).not.toBe("");
        expect(parse.time).not.toBe("");

        expect(parse.array.length).toBe(6);
    });
});

describe('inspectImport groups', () => {
    it('chrome.groups', () => {
        const file = readTestFile('chrome.groups')
        const parse = inspectImport(file);
        //console.log(parse)
        expect(parse.bValid).toBe(true);
        expect(parse.startIndex).toBe(39);
        expect(parse.endIndex).toBe(49);
        expect(parse.type).toBe(importType.GROUPS)
        expect(parse.typeEnd).toBe(importType.GROUPS)

        expect(parse.header).not.toBe("");
        expect(parse.time).not.toBe("");

        expect(parse.array.length).toBe(11);
    });

    it('chrome.groups2', () => {
        const file = readTestFile('chrome.groups2')
        const parse = inspectImport(file);
        //console.log(parse)
        expect(parse.bValid).toBe(true);
        expect(parse.startIndex).toBe(40);
        expect(parse.endIndex).toBe(50);
        expect(parse.type).toBe(importType.GROUPS)
        expect(parse.typeEnd).toBe(importType.GROUPS)

        expect(parse.header).not.toBe("");
        expect(parse.time).not.toBe("");

        expect(parse.array.length).toBe(11);
    });

    it('firefox.groups', () => {
        const file = readTestFile('firefox.groups')
        const parse = inspectImport(file);
        //console.log(parse)
        expect(parse.bValid).toBe(true);
        expect(parse.startIndex).toBe(76);
        expect(parse.endIndex).toBe(83);
        expect(parse.type).toBe(importType.GROUPS)
        expect(parse.typeEnd).toBe(importType.GROUPS)

        expect(parse.header).not.toBe("");
        expect(parse.time).not.toBe("");

        expect(parse.array.length).toBe(8);
    });

    it('firefox.groups2', () => {
        const file = readTestFile('firefox.groups2')
        const parse = inspectImport(file);
        //console.log(parse)
        expect(parse.bValid).toBe(true);
        expect(parse.startIndex).toBe(79);
        expect(parse.endIndex).toBe(86);
        expect(parse.type).toBe(importType.GROUPS)
        expect(parse.typeEnd).toBe(importType.GROUPS)

        expect(parse.header).not.toBe("");
        expect(parse.time).not.toBe("");

        expect(parse.array.length).toBe(8);
    });
});

describe('inspectImport groups NEW', () => {
    it('chrome.groups', () => {
        const file = readTestFile('new.chrome.groups')
        const parse = inspectImport(file);
        //console.log(parse)
        expect(parse.bValid).toBe(true);
        expect(parse.startIndex).toBe(50);
        expect(parse.endIndex).toBe(81);
        expect(parse.type).toBe(importType.GROUPS)
        expect(parse.typeEnd).toBe(importType.GROUPS)

        expect(parse.header).not.toBe("");
        expect(parse.time).not.toBe("");

        expect(parse.array.length).toBe(32);
    });
});

describe('inspectImport troopsAll NEW', () => {
    it('chrome.troopsAll', () => {
        const file = readTestFile('new.chrome.troopsAll')
        const parse = inspectImport(file);
        //console.log(parse)
        expect(parse.bValid).toBe(true);
        expect(parse.startIndex).toBe(54);
        expect(parse.endIndex).toBe(157);
        expect(parse.type).toBe(importType.TROOPSALL)
        expect(parse.typeEnd).toBe(importType.TROOPSALL)

        expect(parse.header).not.toBe("");
        expect(parse.time).not.toBe("");

        expect(parse.array.length).toBe(104);
    });

    
});