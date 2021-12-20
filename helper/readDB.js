const fs = require('fs');
const util = require('util');
const readFromFile = util.promisify(fs.readFile);
const writeToFile = util.promisify(fs.writeFile);

const readFile = (file) => {
return readFromFile(file, 'utf-8');
}

const writeFile = (file, dataToWrite) => {
    return writeToFile(file, dataToWrite);
}

module.exports = { readFile, writeFile };