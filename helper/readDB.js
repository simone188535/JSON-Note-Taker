const fs = require('fs');
const util = require('util');
const readFromFile = util.promisify(fs.readFile);

const readFile = (file) => {
return readFromFile(file, 'utf-8');
}

// , readFromFile, readAndAppend
module.exports = { readFile };