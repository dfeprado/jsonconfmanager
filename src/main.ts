import {readFile} from 'fs';
import path from 'path';

export function getFileContents(confFile: string, encoding: string = 'utf8'): Promise<string> {
    return new Promise<string>((resolve, reject) => {
        readFile(confFile, encoding, (err, data) => {
            if (err) {
                reject(err);
                return;
            }

            resolve(data);
        });
    });
}

export function fileContentsToJSON(confFile: string, encoding: string = 'utf8'): Promise<object> {
    return new Promise<object>(async (resolve, reject) => {
        try {
            resolve(JSON.parse(await getFileContents(confFile, encoding)));
        }
        catch (e) {
            reject(e);
        }
    });
}

export function getParentPath(of: string): string {
    const parentPath: string[] = of.split(path.sep);
    parentPath.pop();
    return parentPath.join(path.sep);
}