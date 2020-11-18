const jsonconfmanager = require('../build/main');

async function doConfRead(fileName) {
    try {
        const confContent = await jsonconfmanager.getFileContents(fileName);
        console.log(confContent);

        const jsonContent = await jsonconfmanager.fileContentsToJSON(fileName);
        console.log(jsonContent);
    }
    catch (e) {
        console.error(e);
    }
}

const path = '/home/user/Documents/file.js';
console.log(`parent of ${path} is ${jsonconfmanager.getParentPath(path)}`);
doConfRead('/tmp/conf.json');
doConfRead('/tmp/conf.txt');