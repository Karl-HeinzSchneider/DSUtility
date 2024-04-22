import { inspectImport } from '../../../src/parser/inspectImport';
import { readTestFile } from '../../testFiles/testFiles';
import { parseGroups } from '../../../src/parser/groups/parseGroups'

describe('parseGroups', () => {

    it('chrome', () => {
        const file = readTestFile('chrome.groups')
        const grp = inspectImport(file);
        const parse = parseGroups(grp)
        const data = parse.data;
        expect(data.length).toBe(0);
        expect(parse.time).not.toBe('');
    });

    it('firefox', () => {
        const file = readTestFile('firefox.groups')
        const grp = inspectImport(file);
        const parse = parseGroups(grp)
        const data = parse.data;
        expect(data.length).toBe(0);
        expect(parse.time).not.toBe('');
    });
});

describe('parseGroups2', () => {

    it('chrome', () => {
        const file = readTestFile('chrome.groups2')
        const grp = inspectImport(file);
        const parse = parseGroups(grp)
        const data = parse.data;

        expect(data.length).toBe(1);
        expect(parse.time).not.toBe('');

        expect(parse.data[0].village).toStrictEqual({ x: 423, y: 655 });
        expect(parse.data[0].groups).toStrictEqual(['Def', 'Off']);

        expect(parse.groups).toStrictEqual(['Def', 'Off']);

    });

    it('firefox', () => {
        const file = readTestFile('firefox.groups2')
        const grp = inspectImport(file);
        const parse = parseGroups(grp)
        const data = parse.data;

        expect(data.length).toBe(1);
        expect(parse.time).not.toBe('');

        expect(parse.data[0].village).toStrictEqual({ x: 423, y: 655 });
        expect(parse.data[0].groups).toStrictEqual(['Def', 'Off']);

        expect(parse.groups).toStrictEqual(['Def', 'Off']);
    });
});

describe('parseGroups2 New', () => {

    it('chrome', () => {
        const file = readTestFile('new.chrome.groups')
        const grp = inspectImport(file);
        const parse = parseGroups(grp)
        const data = parse.data;

        expect(data.length).toBe(19);
        expect(parse.time).not.toBe('');

        expect(parse.data[0].village).toStrictEqual({ x: 441, y: 422 });
        expect(parse.data[0].groups).toStrictEqual(['safe off']);

        expect(parse.groups).toStrictEqual(['safe off', 'flex deff']);

    });
});