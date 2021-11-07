const fs = require('fs');

const writeStream = fs.createWriteStream('./file3.txt');

writeStream.on('finish',()=>{
    console.log('finished');
});

writeStream.write('hello!');
writeStream.write('hello!2');
writeStream.write('hello!3');
writeStream.write('hello!4');
writeStream.write('hello!5');