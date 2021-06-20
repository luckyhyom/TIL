console.time('timeout 0');

console.log('code1');

setTimeout(()=>{
    console.log('timeout');
},0);

console.log('code2');

setImmediate(()=>{
    console.log('immediate');
},0);

console.log('code3');

// code1~3까지 스택 실행 후, 태스크 큐를 제일 앞으로 둔다.
process.nextTick(()=>{
    console.log('tick!');
});
console.timeEnd('timeout 0');