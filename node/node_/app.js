// const http = require('http');

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req,res)=>{
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain');
//     res.end('Hello World2');
// });

// server.listen(port,hostname,()=>{
//     console.log(`Server running at http://${hostname}:${port}/`)
// });

// 내 서버가 동작하고 있는 환경, 운영체제에 대한 정보를 얻어 올때 사용 할 수 있다.
// const os = require('os');
// console.log(os.cpus());

// node가 동작하고 있는 프로세스에 대한 정보, 현재 동작하고있는 node process의 정보.
const process = require('process');
// console.log(process.env);

// 모든 스택이 실행 된 후 큐를 실행.
setTimeout(()=>{
    console.log('setTimeOut');
},0);

// 큐를 맨 앞에 놓음.
process.nextTick(()=>{
    console.log('nextTick!');
})

for (let index = 0; index < 100; index++) {
    console.log('loop..');
    
}