const http = require('http');
const fs = require('fs');
// console.log(http.STATUS_CODES);
// console.log(http.METHODS);

// Java를 서버로 돌리기 위해서는 apache등을 설치해야하지만 node는 그냥 가능.

const server = http.createServer((req,res)=>{
    console.log('incomming...');
    // console.log(req.headers);
    // console.log(req.httpVersion);
    // console.log(req.method);
    const url = req.url;
    res.setHeader('Content-Type','text/html');
    if(url==='/'){
        fs.createReadStream('./html/index.html').pipe(res);
    }else if(url==='/course'){
        fs.createReadStream('./html/index.html').pipe(res);
    }else{
        fs.createReadStream('./html/not-found.html').pipe(res);
    }
    // fileStream사용할때 res.end()함수를 사용하면 화면에 아무것도 뜨지 않음.
    // res.end();
});

server.listen(8080);