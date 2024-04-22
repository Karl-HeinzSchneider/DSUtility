import * as fs from 'fs';

export function readTestFile(name: string): string {
    const path = `./test/testFiles/${name}.txt`;
    //console.log(path);    
    return fs.readFileSync(path, "utf-8");
}