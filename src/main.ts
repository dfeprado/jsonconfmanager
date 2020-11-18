import {readFile} from 'fs';

export function readConf(confFile: string, encoding: string = 'utf8'): Promise<string> {
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