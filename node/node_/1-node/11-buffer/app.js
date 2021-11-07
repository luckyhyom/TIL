// Fixed-size chuck of memory
// arrat of integers, byte of data

const buf = Buffer.from("Hi");
console.log(buf);
console.log(buf.length);
console.log(buf[0]);
console.log(buf[1]);

//create
const buf2 = Buffer.alloc(2);
const buf3 = Buffer.allocUnsafe(2);
buf[0]=72;
buf[1]=105;
buf.copy(buf3);
console.log(buf3);

const all = Buffer.concat([buf,buf2,buf3]).toString();

console.log(all);

