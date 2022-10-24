// const { on } = require('events');
const fs = require('fs');

fs.createReadStream('./file.txt',{
    highWaterMark: 8, //64 kbytes
    encoding: 'utf-8',  
}).once("data",(data)=>{
    console.log(data);
})