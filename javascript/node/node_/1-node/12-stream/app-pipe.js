const fs = require('fs');
const readStream = fs.createReadStream('./file.txt');
const writeStream = fs.createWriteStream('./file4.txt');
const piping = readStream